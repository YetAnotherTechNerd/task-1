import React from 'react';
import Dropdown from '../../common/Dropdown';

const CategoryDropdown = ({ categories, selected, onChange, disabled }) => (
  <Dropdown
    id="category-dropdown"
    label="Category"
    options={categories}
    value={selected}
    onChange={onChange}
    placeholder="Select Category"
    disabled={disabled}
  />
);

export default CategoryDropdown;
