import React from 'react';
import YearDropdown from './YearDropdown';
import QuarterDropdown from './QuarterDropdown';
import CategoryDropdown from './CategoryDropdown';
import SearchBar from './SearchBar';

const FilterSection = ({
  years,
  quarters,
  categories,
  filters,
  onFilterChange,
}) => {
  return (
    <div className="bg-gray-100 rounded-xl border border-gray-200 p-4">
      <div className="flex flex-wrap gap-3 items-center">
        <div className="w-36">
          <YearDropdown
            years={years}
            selected={filters.year}
            onChange={(val) => onFilterChange('year', val)}
          />
        </div>

        <div className="w-36">
          <QuarterDropdown
            quarters={quarters}
            selected={filters.quarter}
            onChange={(val) => onFilterChange('quarter', val)}
            disabled={!filters.year}
          />
        </div>

        <div className="w-40">
          <CategoryDropdown
            categories={categories}
            selected={filters.category}
            onChange={(val) => onFilterChange('category', val)}
            disabled={!filters.year && !filters.quarter}
          />
        </div>

        <SearchBar
          value={filters.searchQuery}
          onChange={(val) => onFilterChange('searchQuery', val)}
        />
      </div>
    </div>
  );
};

export default FilterSection;
