import { useState, useMemo, useCallback } from 'react';
import {
  applyFilters,
  getAvailableYears,
  getAvailableQuarters,
  getAvailableCategories,
  getTopThree,
} from '../utils/filterUtils';

/**
 * Custom hook that manages all leaderboard filter state and derived data.
 * @param {Array} rawData - The full unfiltered employee dataset.
 */
const useFilters = (rawData) => {
  const [filters, setFilters] = useState({
    year: null,
    quarter: null,
    category: null,
    searchQuery: '',
  });

  const availableYears = useMemo(() => getAvailableYears(rawData), [rawData]);

  const availableQuarters = useMemo(
    () => getAvailableQuarters(rawData, filters.year),
    [rawData, filters.year]
  );

  const availableCategories = useMemo(
    () => getAvailableCategories(rawData, filters.year, filters.quarter),
    [rawData, filters.year, filters.quarter]
  );

  const filteredData = useMemo(
    () => applyFilters(rawData, filters),
    [rawData, filters]
  );

  const topThree = useMemo(() => getTopThree(filteredData), [filteredData]);

  const handleFilterChange = useCallback((filterType, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [filterType]: value };
      if (filterType === 'year') {
        newFilters.quarter = null;
        newFilters.category = null;
      } else if (filterType === 'quarter') {
        newFilters.category = null;
      }
      return newFilters;
    });
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({ year: null, quarter: null, category: null, searchQuery: '' });
  }, []);

  return {
    filters,
    availableYears,
    availableQuarters,
    availableCategories,
    filteredData,
    topThree,
    handleFilterChange,
    resetFilters,
  };
};

export default useFilters;
