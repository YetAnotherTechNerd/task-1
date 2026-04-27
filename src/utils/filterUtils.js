/**
 * Returns all unique years from the dataset, sorted descending.
 * @param {Array} data
 * @returns {number[]}
 */
export const getAvailableYears = (data) =>
  [...new Set(data.map((e) => e.year))].sort((a, b) => b - a);

/**
 * Returns available quarters for the selected year (or all quarters if no year).
 * @param {Array} data
 * @param {number|null} year
 * @returns {string[]}
 */
export const getAvailableQuarters = (data, year) => {
  const filtered = year ? data.filter((e) => e.year === year) : data;
  const order = ['Q1', 'Q2', 'Q3', 'Q4'];
  return [...new Set(filtered.map((e) => e.quarter))].sort(
    (a, b) => order.indexOf(a) - order.indexOf(b)
  );
};

/**
 * Returns available categories for the selected year + quarter combination.
 * @param {Array} data
 * @param {number|null} year
 * @param {string|null} quarter
 * @returns {string[]}
 */
export const getAvailableCategories = (data, year, quarter) => {
  let filtered = data;
  if (year) filtered = filtered.filter((e) => e.year === year);
  if (quarter) filtered = filtered.filter((e) => e.quarter === quarter);
  return [...new Set(filtered.map((e) => e.category))].sort();
};

/**
 * Applies all active filters to the dataset and returns sorted results.
 * @param {Array} data
 * @param {{ year: number|null, quarter: string|null, category: string|null, searchQuery: string }} filters
 * @returns {Array}
 */
export const applyFilters = (data, filters) => {
  let result = [...data];

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

  return result.sort((a, b) => b.points - a.points);
};

/**
 * Returns the top three employees from an already-filtered and sorted list.
 * @param {Array} employees
 * @returns {Array}
 */
export const getTopThree = (employees) => employees.slice(0, 3);
