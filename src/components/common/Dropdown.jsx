import React from 'react';

/**
 * Reusable base dropdown component.
 *
 * @param {string}   id           - Input id (also used for label htmlFor)
 * @param {Array}    options       - Array of option values
 * @param {*}        value         - Currently selected value (null means "placeholder")
 * @param {function} onChange      - Called with the new value (or null when placeholder selected)
 * @param {string}   placeholder   - Placeholder option text shown inside the select
 * @param {boolean}  disabled      - Disables the select element
 * @param {string}   className     - Additional CSS classes for the wrapper div
 */
const Dropdown = ({
  id,
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
    <div className={className}>
      <select
        id={id}
        value={value ?? ''}
        onChange={handleChange}
        disabled={disabled}
        className={[
          'block w-full rounded border border-gray-300 bg-white',
          'py-1.5 pl-3 pr-8 text-sm text-gray-700',
          'focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-300',
          'transition-colors',
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        ].join(' ')}
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
