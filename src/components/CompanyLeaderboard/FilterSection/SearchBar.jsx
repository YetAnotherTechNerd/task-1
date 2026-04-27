import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative flex-1 min-w-[220px]">
      <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
      </span>
      <input
        id="search-bar"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search employee..."
        className="
          block w-full rounded border border-gray-300 bg-white
          py-1.5 pl-9 pr-3 text-sm text-gray-700
          focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-300
          transition-colors
        "
      />
    </div>
  );
};

export default SearchBar;
