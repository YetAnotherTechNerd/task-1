import React from 'react';

/**
 * Generic Dropdown component.
 * Used as a base; individual dropdowns (Year/Quarter/Category) extend this pattern.
 */
const Dropdown = ({ options = [], selected, onChange, disabled, placeholder, className = '' }) => {
  const base =
    'px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400';
  const disabledClass = 'opacity-50 cursor-not-allowed';

  return (
    <select
      className={`${base} ${disabled ? disabledClass : 'cursor-pointer'} ${className}`}
      value={selected || ''}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => {
        const value = typeof opt === 'object' ? opt.value : opt;
        const label = typeof opt === 'object' ? opt.label : opt;
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
