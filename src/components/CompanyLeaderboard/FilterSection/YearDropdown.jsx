import React from 'react';

const selectBase =
  'w-32 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer';

const YearDropdown = ({ years, selected, onChange, placeholder }) => {
  return (
    <select
      className={selectBase}
      value={selected || ''}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Select year"
    >
      <option value="" disabled>
        {placeholder || 'Select Year'}
      </option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearDropdown;
