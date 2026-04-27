import React from 'react';
import YearDropdown from './YearDropdown';
import QuarterDropdown from './QuarterDropdown';
import CategoryDropdown from './CategoryDropdown';
import SearchBar from './SearchBar';

const FilterSection = ({
  filters,
  availableYears,
  availableQuarters,
  availableCategories,
  onFilterChange,
  onReset,
}) => {
  const hasActiveFilters =
    filters.year || filters.quarter || filters.category || filters.searchQuery;

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex flex-wrap items-end gap-4">
        <YearDropdown
          years={availableYears}
          selected={filters.year}
          onChange={(val) => onFilterChange('year', val)}
        />
        <QuarterDropdown
          quarters={availableQuarters}
          selected={filters.quarter}
          onChange={(val) => onFilterChange('quarter', val)}
          disabled={!filters.year}
        />
        <CategoryDropdown
          categories={availableCategories}
          selected={filters.category}
          onChange={(val) => onFilterChange('category', val)}
          disabled={!filters.year && !filters.quarter}
        />
        <SearchBar
          value={filters.searchQuery}
          onChange={(val) => onFilterChange('searchQuery', val)}
        />
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className="
              self-end mb-0.5 px-3 py-2 text-sm font-medium text-gray-600
              border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400
              transition-colors duration-150
            "
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
