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
}) => {
  return (
    <div className="flex flex-wrap gap-3 p-4 bg-white border-b border-gray-200">
      <YearDropdown
        years={availableYears}
        selected={filters.year}
        onChange={(value) => onFilterChange('year', value)}
        placeholder="Select Year"
      />
      <QuarterDropdown
        quarters={availableQuarters}
        selected={filters.quarter}
        onChange={(value) => onFilterChange('quarter', value)}
        disabled={!filters.year}
        placeholder="Select Quarter"
      />
      <CategoryDropdown
        categories={availableCategories}
        selected={filters.category}
        onChange={(value) => onFilterChange('category', value)}
        disabled={!filters.year && !filters.quarter}
        placeholder="Select Category"
      />
      <SearchBar
        value={filters.searchQuery}
        onChange={(value) => onFilterChange('searchQuery', value)}
        placeholder="Search by name or department…"
      />
    </div>
  );
};

export default FilterSection;
