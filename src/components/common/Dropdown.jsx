import React from 'react';

/**
 * Reusable controlled dropdown component.
 * @param {string} label - Accessible label text.
 * @param {Array} options - Array of values for the dropdown.
 * @param {*} value - Currently selected value.
 * @param {function} onChange - Called with the selected value (or null for "All").
 * @param {string} placeholder - Placeholder text shown when nothing is selected.
 * @param {boolean} disabled - Whether the dropdown is disabled.
 * @param {string} [className] - Additional Tailwind classes.
 */
const Dropdown = ({ label, options, value, onChange, placeholder, disabled = false, className = '' }) => {
  const handleChange = (e) => {
    const selected = e.target.value;
    onChange(selected === '' ? null : selected);
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-xs font-medium text-gray-600 uppercase tracking-wide">
          {label}
        </label>
      )}
      <select
        value={value ?? ''}
        onChange={handleChange}
        disabled={disabled}
        className={`
          border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-colors duration-150
          ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'hover:border-gray-400 cursor-pointer'}
        `}
        aria-label={label || placeholder}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
