import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-1 flex-1 min-w-[220px]">
      <label
        htmlFor="search-bar"
        className="text-xs font-semibold text-gray-500 uppercase tracking-wide"
      >
        Search
      </label>
      <div className="relative">
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
          placeholder="Search by name, department…"
          className="
            block w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm
            shadow-sm transition-colors
            focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200
          "
        />
      </div>
    </div>
  );
};

export default SearchBar;
