import React from 'react';
import EmployeeRow from './EmployeeRow';

const EmployeeListSection = ({ employees, expandedRows, onToggleExpand }) => {
  if (!employees || employees.length === 0) {
    return (
      <div className="px-6 py-10 text-center text-gray-400 text-sm">
        No employees match the current filters.
      </div>
    );
  }

  return (
    <div className="px-6 py-4">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
        All Employees ({employees.length})
      </h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-10 text-center">
                #
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                Position
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
                Department
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                Points
              </th>
              <th className="px-4 py-3 w-10" />
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                rank={index + 1}
                isExpanded={expandedRows.has(employee.id)}
                onToggle={onToggleExpand}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeListSection;
