import React from 'react';
import Dropdown from '../../common/Dropdown';

const CategoryDropdown = ({ categories, selected, onChange, disabled }) => {
  const allCategoriesOptions = ['All Categories', ...categories];

  const handleChange = (val) => {
    if (val === 'All Categories' || val === null) {
      onChange(null);
    } else {
      onChange(val);
    }
  };

  const displayValue = selected === null ? 'All Categories' : selected;

  return (
    <Dropdown
      id="category-dropdown"
      options={allCategoriesOptions}
      value={displayValue}
      onChange={handleChange}
      placeholder="All Categories"
      disabled={disabled}
    />
  );
};

export default CategoryDropdown;
