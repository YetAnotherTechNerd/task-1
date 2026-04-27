import React from 'react';
import RecentActivityPanel from './RecentActivityPanel';

const EmployeeRow = ({ employee, rank, isExpanded, onToggle }) => {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      {/* Main row */}
      <div
        className={`
          flex items-center gap-4 px-6 py-4 transition-colors
          ${isExpanded ? 'bg-indigo-50' : 'hover:bg-gray-50'}
        `}
      >
        {/* Rank */}
        <span className="w-8 shrink-0 text-center text-sm font-bold text-gray-400">
          {rank}
        </span>

        {/* Name */}
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-gray-800">
            {employee.name} {employee.surname}
          </p>
        </div>

        {/* Position */}
        <div className="hidden min-w-0 w-44 sm:block">
          <p className="truncate text-sm text-gray-600">{employee.position}</p>
        </div>

        {/* Department */}
        <div className="hidden min-w-0 w-36 md:block">
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium text-indigo-700">
            {employee.department}
          </span>
        </div>

        {/* Points */}
        <div className="w-20 shrink-0 text-right">
          <span className="text-sm font-bold text-indigo-600">
            {employee.points.toLocaleString()}
          </span>
          <span className="ml-1 text-xs text-gray-400">pts</span>
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => onToggle(employee.id)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse activities' : 'Expand activities'}
          className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full
            text-gray-400 transition-colors hover:bg-indigo-100 hover:text-indigo-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expandable activity panel */}
      {isExpanded && (
        <RecentActivityPanel activities={employee.recentActivities} />
      )}
    </div>
  );
};

export default EmployeeRow;
