import React from 'react';
import EmployeeRow from './EmployeeRow';

const EmployeeListSection = ({ employees, expandedRows, onToggleExpand }) => {
  return (
    <div className="overflow-x-auto">
      {employees.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <span className="text-5xl mb-4">🔍</span>
          <p className="text-lg font-medium">No employees match your filters</p>
          <p className="text-sm mt-1">Try adjusting or clearing the filters above</p>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                Position
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
                Department
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Points
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Activities
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.map((employee) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                isExpanded={expandedRows.has(employee.id)}
                onToggle={onToggleExpand}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeListSection;
