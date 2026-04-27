/**
 * Extract unique years from data, sorted descending.
 * @param {Array} data - Array of employee objects
 * @returns {string[]} Sorted years (newest first)
 */
export const getAvailableYears = (data) => {
  const years = [...new Set(data.map((e) => e.year))];
  return years.sort((a, b) => b.localeCompare(a));
};

/**
 * Get quarters available for a selected year.
 * @param {Array} data
 * @param {string} year
 * @returns {string[]} Sorted quarters for that year
 */
export const getAvailableQuarters = (data, year) => {
  if (!year) return [];
  const quarters = [...new Set(data.filter((e) => e.year === year).map((e) => e.quarter))];
  return quarters.sort();
};

/**
 * Get categories available for a selected year + quarter combination.
 * @param {Array} data
 * @param {string} year
 * @param {string} quarter
 * @returns {string[]} Sorted category names
 */
export const getAvailableCategories = (data, year, quarter) => {
  if (!year || !quarter) return [];
  const categories = [
    ...new Set(
      data
        .filter((e) => e.year === year && e.quarter === quarter)
        .map((e) => e.category)
    ),
  ];
  return categories.sort();
};

/**
 * Apply cascading filters: Year → Quarter → Category → Search.
 * Results are sorted by points descending.
 * @param {Array} data
 * @param {{ year: string|null, quarter: string|null, category: string|null, searchQuery: string }} filters
 * @returns {Array} Filtered and sorted employee list
 */
export const applyFilters = (data, filters) => {
  let result = data;

  if (filters.year) {
    result = result.filter((e) => e.year === filters.year);
  }
  if (filters.quarter) {
    result = result.filter((e) => e.quarter === filters.quarter);
  }
  if (filters.category) {
    result = result.filter((e) => e.category === filters.category);
  }
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    result = result.filter(
      (e) =>
        e.name.toLowerCase().includes(query) ||
        e.surname.toLowerCase().includes(query) ||
        e.department.toLowerCase().includes(query)
    );
  }

  return [...result].sort((a, b) => b.points - a.points);
};

/**
 * Sort employees by points and return the top 3.
 * @param {Array} data
 * @returns {Array} Top 3 employees sorted by points descending
 */
export const getTopThree = (data) => {
  return [...data].sort((a, b) => b.points - a.points).slice(0, 3);
};

/**
 * Create a debounced version of a function.
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};
