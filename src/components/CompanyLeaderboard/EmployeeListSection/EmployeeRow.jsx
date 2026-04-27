import React from 'react';
import { Text, Badge, Button } from '@fluentui/react-components';
import { ChevronDownRegular } from '@fluentui/react-icons';
import RecentActivityPanel from './RecentActivityPanel';

const EmployeeRow = ({ employee, rank, isExpanded, onToggle }) => {
  return (
    <div style={{ borderBottom: '1px solid #f3f2f1' }}>
      {/* Main row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '16px 24px',
          backgroundColor: isExpanded ? '#eef2ff' : undefined,
          transition: 'background-color 0.15s',
        }}
      >
        {/* Rank */}
        <Text
          size={200}
          weight="bold"
          style={{
            width: '32px',
            flexShrink: 0,
            textAlign: 'center',
            color: '#9ca3af',
          }}
        >
          {rank}
        </Text>

        {/* Name */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <Text
            weight="semibold"
            style={{
              color: '#1f2937',
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {employee.name} {employee.surname}
          </Text>
        </div>

        {/* Position */}
        <div style={{ width: '176px', minWidth: 0 }}>
          <Text
            size={200}
            style={{
              color: '#4b5563',
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {employee.position}
          </Text>
        </div>

        {/* Department */}
        <div style={{ width: '144px', minWidth: 0 }}>
          <Badge appearance="tint" color="informative" size="small">
            {employee.department}
          </Badge>
        </div>

        {/* Points */}
        <div style={{ width: '80px', flexShrink: 0, textAlign: 'right', display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end', gap: '4px' }}>
          <Text size={200} weight="bold" style={{ color: '#4f46e5' }}>
            {employee.points.toLocaleString()}
          </Text>
          <Text size={100} style={{ color: '#9ca3af' }}>
            pts
          </Text>
        </div>

        {/* Expand toggle */}
        <Button
          appearance="subtle"
          shape="circular"
          size="small"
          icon={
            <ChevronDownRegular
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            />
          }
          onClick={() => onToggle(employee.id)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse activities' : 'Expand activities'}
          style={{ marginLeft: '8px', flexShrink: 0 }}
        />
      </div>

      {/* Expandable activity panel */}
      {isExpanded && (
        <RecentActivityPanel activities={employee.recentActivities} />
      )}
    </div>
  );
};

export default EmployeeRow;
