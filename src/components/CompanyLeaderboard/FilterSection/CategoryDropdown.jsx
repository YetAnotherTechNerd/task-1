import React from 'react';
import Dropdown from '../../common/Dropdown';

const CategoryDropdown = ({ categories, selected, onChange, disabled }) => (
  <Dropdown
    label="Category"
    options={categories}
    value={selected}
    onChange={onChange}
    placeholder="All Categories"
    disabled={disabled}
    className="w-40"
  />
);

export default CategoryDropdown;
