import React from 'react';

/**
 * Reusable base dropdown component.
 *
 * @param {string}   id           - Input id (also used for label htmlFor)
 * @param {string}   label        - Visible label text
 * @param {Array}    options       - Array of option values
 * @param {*}        value         - Currently selected value (null means "placeholder")
 * @param {function} onChange      - Called with the new value (or null when placeholder selected)
 * @param {string}   placeholder   - Placeholder option text
 * @param {boolean}  disabled      - Disables the select element
 * @param {string}   className     - Additional Tailwind classes for the wrapper div
 */
const Dropdown = ({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  className = '',
}) => {
  const handleChange = (e) => {
    const selected = e.target.value;
    onChange(selected === '' ? null : selected);
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-semibold text-gray-500 uppercase tracking-wide"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        value={value ?? ''}
        onChange={handleChange}
        disabled={disabled}
        className={`
          block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm
          shadow-sm transition-colors
          focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200
          disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400
        `}
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
