import React from 'react';
import EmployeeRow from './EmployeeRow';

const EmployeeListSection = ({ employees, expandedRows, onToggleExpand }) => {
  if (employees.length === 0) {
    return (
      <div
        style={{
          padding: '48px 32px',
          textAlign: 'center',
        }}
      >
        <div style={{ color: '#9ca3af', fontSize: '14px' }}>
          No employees match the selected filters.
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '1154px',
        maxWidth: '100%',
      }}
    >

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
