import React from 'react';

const CategoryDropdown = ({ categories, selected, onChange, disabled, placeholder }) => {
  const base =
    'w-44 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400';
  const disabledClass = 'opacity-50 cursor-not-allowed';

  return (
    <select
      className={`${base} ${disabled ? disabledClass : 'cursor-pointer'}`}
      value={selected || ''}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      aria-label="Select category"
    >
      <option value="" disabled>
        {placeholder || 'Select Category'}
      </option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
