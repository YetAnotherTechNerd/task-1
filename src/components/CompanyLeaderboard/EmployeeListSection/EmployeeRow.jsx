import React from 'react';
import RecentActivityPanel from './RecentActivityPanel';

const EmployeeRow = ({ employee, rank, isExpanded, onToggle }) => {
  return (
    <>
      <tr
        className={`
          border-b border-gray-100 transition-colors duration-100
          ${isExpanded ? 'bg-blue-50' : 'odd:bg-white even:bg-gray-50 hover:bg-blue-50'}
        `}
      >
        <td className="px-4 py-3 text-sm text-gray-500 w-10 text-center font-medium">
          {rank}
        </td>
        <td className="px-4 py-3">
          <div className="font-semibold text-gray-900 text-sm">
            {employee.name} {employee.surname}
          </div>
        </td>
        <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">
          {employee.position}
        </td>
        <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">
          {employee.department}
        </td>
        <td className="px-4 py-3 text-sm font-bold text-blue-700 text-right">
          {employee.points.toLocaleString()}
        </td>
        <td className="px-4 py-3 text-center w-10">
          <button
            type="button"
            onClick={() => onToggle(employee.id)}
            className="text-gray-400 hover:text-blue-600 transition-colors duration-150 focus:outline-none"
            aria-label={isExpanded ? 'Collapse activities' : 'Expand activities'}
            aria-expanded={isExpanded}
          >
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
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
      <RecentActivityPanel activities={employee.recentActivities} isExpanded={isExpanded} />
    </>
  );
};

export default EmployeeRow;
