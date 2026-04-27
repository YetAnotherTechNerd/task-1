import React from 'react';
import RecentActivityPanel from './RecentActivityPanel';

const EmployeeRow = ({ employee, isExpanded, onToggle }) => {
  const { id, name, surname, position, department, points, recentActivities = [] } = employee;

  return (
    <>
      <tr
        className="odd:bg-white even:bg-gray-50 hover:bg-indigo-50 transition-colors cursor-pointer"
        aria-expanded={isExpanded}
      >
        <td className="px-4 py-3 text-sm font-medium text-gray-900">
          {name} {surname}
        </td>
        <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">{position}</td>
        <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">{department}</td>
        <td className="px-4 py-3 text-sm font-semibold text-indigo-700 text-right">
          {points.toLocaleString()}
        </td>
        <td className="px-4 py-3 text-center">
          <button
            onClick={() => onToggle(id)}
            className={`inline-flex items-center justify-center w-7 h-7 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              isExpanded
                ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                : 'text-gray-400 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
            aria-label={isExpanded ? 'Collapse activities' : 'Expand activities'}
          >
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </td>
      </tr>

      {isExpanded && (
        <tr>
          <td colSpan={5} className="px-4 pb-3 pt-0">
            <RecentActivityPanel activities={recentActivities} isExpanded={isExpanded} />
          </td>
        </tr>
      )}
    </>
  );
};

export default EmployeeRow;
