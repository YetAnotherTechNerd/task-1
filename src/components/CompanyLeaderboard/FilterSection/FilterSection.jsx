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
    <div
      style={{
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '8px',
        border: '1px solid rgb(226, 232, 240)',
        padding: '16px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '144px' }}>
          <YearDropdown
            years={years}
            selected={filters.year}
            onChange={(val) => onFilterChange('year', val)}
          />
        </div>

        <div style={{ width: '144px' }}>
          <QuarterDropdown
            quarters={quarters}
            selected={filters.quarter}
            onChange={(val) => onFilterChange('quarter', val)}
            disabled={!filters.year}
          />
        </div>

        <div style={{ width: '160px' }}>
          <CategoryDropdown
            categories={categories}
            selected={filters.category}
            onChange={(val) => onFilterChange('category', val)}
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
