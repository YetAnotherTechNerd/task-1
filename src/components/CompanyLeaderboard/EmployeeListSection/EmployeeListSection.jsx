import React from 'react';
import { Text } from '@fluentui/react-components';
import EmployeeRow from './EmployeeRow';

const EmployeeListSection = ({ employees, expandedRows, onToggleExpand }) => {
  if (employees.length === 0) {
    return (
      <div
        style={{
          borderRadius: '12px',
          backgroundColor: '#fff',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          border: '1px solid #f3f2f1',
          padding: '48px 32px',
          textAlign: 'center',
        }}
      >
        <Text size={200} style={{ color: '#9ca3af' }}>
          No employees match the selected filters.
        </Text>
      </div>
    );
  }

  return (
    <div
      style={{
        borderRadius: '12px',
        backgroundColor: '#fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        border: '1px solid #f3f2f1',
        overflow: 'hidden',
      }}
    >
      {/* Table header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: '#f9fafb',
          padding: '12px 24px',
        }}
      >
        <Text
          size={100}
          weight="bold"
          style={{
            width: '32px',
            flexShrink: 0,
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#9ca3af',
          }}
        >
          #
        </Text>
        <Text
          size={100}
          weight="bold"
          style={{
            flex: 1,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#6b7280',
          }}
        >
          Name
        </Text>
        <Text
          size={100}
          weight="bold"
          style={{
            width: '176px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#6b7280',
          }}
        >
          Position
        </Text>
        <Text
          size={100}
          weight="bold"
          style={{
            width: '144px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#6b7280',
          }}
        >
          Department
        </Text>
        <Text
          size={100}
          weight="bold"
          style={{
            width: '80px',
            flexShrink: 0,
            textAlign: 'right',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#6b7280',
          }}
        >
          Points
        </Text>
        {/* Space for the toggle button */}
        <span style={{ marginLeft: '8px', width: '32px', flexShrink: 0 }} aria-hidden="true" />
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
