import React from 'react';
import EmployeeRow from './EmployeeRow';

const EmployeeListSection = ({ employees, expandedRows, onToggleExpand }) => {
  if (employees.length === 0) {
    return (
      <div className="rounded-xl bg-white shadow-sm border border-gray-100 px-8 py-12 text-center">
        <p className="text-gray-400 text-sm">No employees match the selected filters.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
      {/* Table header */}
      <div className="flex items-center gap-4 border-b border-gray-200 bg-gray-50 px-6 py-3">
        <span className="w-8 shrink-0 text-center text-xs font-bold uppercase tracking-wide text-gray-400">
          #
        </span>
        <span className="flex-1 text-xs font-bold uppercase tracking-wide text-gray-500">
          Name
        </span>
        <span className="hidden w-44 text-xs font-bold uppercase tracking-wide text-gray-500 sm:block">
          Position
        </span>
        <span className="hidden w-36 text-xs font-bold uppercase tracking-wide text-gray-500 md:block">
          Department
        </span>
        <span className="w-20 shrink-0 text-right text-xs font-bold uppercase tracking-wide text-gray-500">
          Points
        </span>
        {/* Space for the toggle button */}
        <span className="ml-2 w-8 shrink-0" aria-hidden="true" />
      </div>

      {/* Rows */}
      {employees.map((employee, index) => (
        <EmployeeRow
          key={employee.id}
          rank={index + 1}
          employee={employee}
          isExpanded={expandedRows.has(employee.id)}
          onToggle={onToggleExpand}
        />
      ))}
    </div>
  );
};

export default EmployeeListSection;
