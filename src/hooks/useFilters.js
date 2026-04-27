import { useState, useMemo, useCallback, useRef } from 'react';
import {
  getAvailableYears,
  getAvailableQuarters,
  getAvailableCategories,
  applyFilters,
  getTopThree,
  debounce,
} from '../utils/filterUtils';
import mockEmployeeData from '../data/mockEmployeeData';

const initialFilters = {
  year: null,
  quarter: null,
  category: null,
  searchQuery: '',
};

const useFilters = () => {
  const [filters, setFilters] = useState(initialFilters);
  const [expandedRows, setExpandedRows] = useState(new Set());

  // Debounced setter for search query — stable reference across renders.
  const debouncedSetSearch = useRef(
    debounce((value) => {
      setFilters((prev) => ({ ...prev, searchQuery: value }));
    }, 300)
  ).current;

  /**
   * Handle filter changes with smart cascading reset logic:
   *  - Changing year  → resets quarter & category to null
   *  - Changing quarter → resets category to null
   *  - Changing category → no additional resets
   *  - Changing searchQuery → debounced, no resets
   */
  const handleFilterChange = useCallback((filterType, value) => {
    if (filterType === 'searchQuery') {
      debouncedSetSearch(value);
      return;
    }

    setFilters((prev) => {
      switch (filterType) {
        case 'year':
          return { ...prev, year: value || null, quarter: null, category: null };
        case 'quarter':
          return { ...prev, quarter: value || null, category: null };
        case 'category':
          return { ...prev, category: value || null };
        default:
          return { ...prev, [filterType]: value || null };
      }
    });
  }, [debouncedSetSearch]);

  /**
   * Toggle the expanded state of an employee row.
   */
  const toggleRowExpansion = useCallback((employeeId) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(employeeId)) {
        next.delete(employeeId);
      } else {
        next.add(employeeId);
      }
      return next;
    });
  }, []);

  // Memoised available options derived from current filter state.
  const availableYears = useMemo(() => getAvailableYears(mockEmployeeData), []);

  const availableQuarters = useMemo(
    () => getAvailableQuarters(mockEmployeeData, filters.year),
    [filters.year]
  );

  const availableCategories = useMemo(
    () => getAvailableCategories(mockEmployeeData, filters.year, filters.quarter),
    [filters.year, filters.quarter]
  );

  // Memoised filtered & sorted employee list.
  const filteredData = useMemo(
    () => applyFilters(mockEmployeeData, filters),
    [filters]
  );

  // Memoised top-3 from the full (unfiltered) dataset.
  const topThree = useMemo(() => getTopThree(mockEmployeeData), []);

  return {
    filters,
    expandedRows,
    availableYears,
    availableQuarters,
    availableCategories,
    filteredData,
    topThree,
    handleFilterChange,
    toggleRowExpansion,
  };
};

export default useFilters;
