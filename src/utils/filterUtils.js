/**
 * Extract unique, sorted years from the employee dataset.
 * @param {Array} data
 * @returns {number[]}
 */
export const getAvailableYears = (data) => {
  const years = [...new Set(data.map((e) => e.year))];
  return years.sort((a, b) => a - b);
};

/**
 * Extract unique quarters available for a given year.
 * When no year is provided all quarters present in the dataset are returned.
 * @param {Array} data
 * @param {number|null} year
 * @returns {string[]}
 */
export const getAvailableQuarters = (data, year) => {
  const filtered = year ? data.filter((e) => e.year === year) : data;
  const order = ['Q1', 'Q2', 'Q3', 'Q4'];
  const quarters = [...new Set(filtered.map((e) => e.quarter))];
  return quarters.sort((a, b) => order.indexOf(a) - order.indexOf(b));
};

/**
 * Extract unique categories available for the given year + quarter combination.
 * Filters are applied only when a value is provided.
 * @param {Array} data
 * @param {number|null} year
 * @param {string|null} quarter
 * @returns {string[]}
 */
export const getAvailableCategories = (data, year, quarter) => {
  let filtered = data;
  if (year) filtered = filtered.filter((e) => e.year === year);
  if (quarter) filtered = filtered.filter((e) => e.quarter === quarter);
  const categories = [...new Set(filtered.map((e) => e.category))];
  return categories.sort();
};

/**
 * Apply cascading filters and return the sorted employee list.
 * The result is sorted by points descending.
 * @param {Array} data
 * @param {{ year: number|null, quarter: string|null, category: string|null, searchQuery: string }} filters
 * @returns {Array}
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
  if (filters.searchQuery && filters.searchQuery.trim() !== '') {
    const query = filters.searchQuery.toLowerCase().trim();
    result = result.filter(
      (e) =>
        e.name.toLowerCase().includes(query) ||
        e.surname.toLowerCase().includes(query) ||
        e.department.toLowerCase().includes(query) ||
        e.position.toLowerCase().includes(query)
    );
  }

  return [...result].sort((a, b) => b.points - a.points);
};

/**
 * Return the top 3 employees by points from an already-filtered list.
 * @param {Array} data - pre-filtered and sorted employee array
 * @returns {Array}
 */
export const getTopThree = (data) => {
  return data.slice(0, 3);
};
