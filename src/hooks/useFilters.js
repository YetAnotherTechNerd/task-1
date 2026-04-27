import { useState, useMemo } from 'react';
import {
  getAvailableYears,
  getAvailableQuarters,
  getAvailableCategories,
  applyFilters,
  getTopThree,
} from '../utils/filterUtils';

/**
 * Custom hook that manages all leaderboard filter state and derived data.
 *
 * @param {Array} data - Raw employee dataset
 * @returns {{
 *   filters: object,
 *   availableYears: number[],
 *   availableQuarters: string[],
 *   availableCategories: string[],
 *   filteredData: Array,
 *   topThree: Array,
 *   handleFilterChange: function,
 * }}
 */
const useFilters = (data) => {
  const [filters, setFilters] = useState({
    year: null,
    quarter: null,
    category: null,
    searchQuery: '',
  });

  const availableYears = useMemo(() => getAvailableYears(data), [data]);

  const availableQuarters = useMemo(
    () => getAvailableQuarters(data, filters.year),
    [data, filters.year]
  );

  const availableCategories = useMemo(
    () => getAvailableCategories(data, filters.year, filters.quarter),
    [data, filters.year, filters.quarter]
  );

  const filteredData = useMemo(
    () => applyFilters(data, filters),
    [data, filters]
  );

  const topThree = useMemo(() => getTopThree(filteredData), [filteredData]);

  /**
   * Update a single filter value. Cascading resets are applied:
   *  - Changing year  → resets quarter and category
   *  - Changing quarter → resets category
   */
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      const updated = { ...prev, [filterType]: value };

      if (filterType === 'year') {
        updated.quarter = null;
        updated.category = null;
      } else if (filterType === 'quarter') {
        updated.category = null;
      }

      return updated;
    });
  };

  return {
    filters,
    availableYears,
    availableQuarters,
    availableCategories,
    filteredData,
    topThree,
    handleFilterChange,
  };
};

export default useFilters;
