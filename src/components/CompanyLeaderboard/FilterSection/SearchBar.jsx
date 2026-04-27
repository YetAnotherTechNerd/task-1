import React, { useRef } from 'react';
import { debounce } from '../../../utils/filterUtils';

const SearchBar = ({ value, onChange, placeholder }) => {
  // Keep a stable debounced handler that calls the parent onChange.
  const debouncedOnChange = useRef(debounce((val) => onChange(val), 300)).current;

  const handleInput = (e) => {
    debouncedOnChange(e.target.value);
  };

  return (
    <div className="flex items-center flex-1 min-w-[250px] border border-gray-300 rounded-lg bg-white px-3 focus-within:ring-2 focus-within:ring-indigo-400">
      <span className="mr-2 text-gray-400 select-none" aria-hidden="true">
        🔍
      </span>
      <input
        type="text"
        className="flex-1 py-2 text-sm text-gray-700 bg-transparent outline-none"
        defaultValue={value}
        onChange={handleInput}
        placeholder={placeholder || 'Search…'}
        aria-label="Search employees"
      />
    </div>
  );
};

export default SearchBar;
