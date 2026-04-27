import React, { useState, useEffect, useCallback } from 'react';

const SearchBar = ({ value, onChange }) => {
  const [localValue, setLocalValue] = useState(value || '');

  useEffect(() => {
    setLocalValue(value || '');
  }, [value]);

  const handleChange = useCallback(
    (e) => {
      const newVal = e.target.value;
      setLocalValue(newVal);
      const timer = setTimeout(() => onChange(newVal), 300);
      return () => clearTimeout(timer);
    },
    [onChange]
  );

  return (
    <div className="flex flex-col gap-1 flex-1 min-w-[250px]">
      <label className="text-xs font-medium text-gray-600 uppercase tracking-wide">
        Search
      </label>
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
        <input
          type="text"
          value={localValue}
          onChange={handleChange}
          placeholder="Search by name or department…"
          className="
            w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 text-sm bg-white
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            hover:border-gray-400 transition-colors duration-150
          "
          aria-label="Search employees"
        />
        {localValue && (
          <button
            type="button"
            onClick={() => { setLocalValue(''); onChange(''); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
