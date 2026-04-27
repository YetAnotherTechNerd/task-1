import React from 'react';
import Dropdown from '../../common/Dropdown';

const CategoryDropdown = ({ categories, selected, onChange, disabled }) => (
  <Dropdown
    id="category-dropdown"
    options={categories}
    value={selected}
    onChange={onChange}
    placeholder="All Categories"
    disabled={disabled}
  />
);

export default CategoryDropdown;
