import React from 'react';
import RecentActivityPanel from './RecentActivityPanel';

const EmployeeRow = ({ employee, isExpanded, onToggle }) => {
  const { id, name, surname, position, department, points, recentActivities = [] } = employee;

  return (
    <>
      <tr
        className="odd:bg-white even:bg-gray-50 hover:bg-indigo-50 transition-colors"
        aria-expanded={isExpanded}
      >
        <td className="px-4 py-3 text-sm font-medium text-gray-900">
          {name} {surname}
        </td>
        <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">{position}</td>
        <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">{department}</td>
        <td className="px-4 py-3 text-sm font-semibold text-indigo-700 text-right">{points.toLocaleString()}</td>
        <td className="px-4 py-3 text-center">
          <button
            onClick={() => onToggle(id)}
            className="text-gray-400 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
            aria-label={isExpanded ? 'Collapse activities' : 'Expand activities'}
          >
            <svg
              className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
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
        <tr className="bg-indigo-50">
          <td colSpan={5} className="px-4 py-3">
            <RecentActivityPanel activities={recentActivities} />
          </td>
        </tr>
      )}
    </>
  );
};

export default EmployeeRow;
