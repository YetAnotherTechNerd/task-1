import React from 'react';
import { Text, Button, Tooltip } from '@fluentui/react-components';
import RecentActivityPanel from './RecentActivityPanel';

const CategoryIcon = ({ category }) => {
  const icons = {
    'Lecture': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(14, 165, 233)" strokeWidth="2">
        <path d="M12 2L2 6v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-10-4z" />
      </svg>
    ),
    'Conference/Summit': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(14, 165, 233)" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    'Roundtable': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(14, 165, 233)" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" />
      </svg>
    ),
  };
  return icons[category] || icons['Lecture'];
};

const EmployeeRow = ({ employee, rank, isExpanded, onToggle }) => {
  const avatarSize = 56;

  return (
    <div
      style={{
        backgroundColor: 'var(--app-surface)',
        border: isExpanded ? '1px solid var(--app-border)' : '1px solid transparent',
        borderRadius: '20px',
        overflow: 'hidden',
        marginBottom: '12px',
      }}
    >
      {/* Main row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          minHeight: '96px',
          padding: '20px 24px',
          backgroundColor: 'var(--app-surface)',
          transition: 'background-color 0.15s',
          borderBottom: isExpanded ? 'none' : '1px solid var(--app-border)',
          boxSizing: 'border-box',
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: `${avatarSize}px`,
            height: `${avatarSize}px`,
            borderRadius: '50%',
            border: '1px solid var(--app-border)',
            backgroundColor: 'var(--app-surface-muted)',
            backgroundImage: employee.avatar ? `url(${employee.avatar})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            flexShrink: 0,
          }}
        />

        {/* Name + Position block */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <Text
            weight="bold"
            style={{
              fontSize: '18px',
              color: '#000',
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {employee.name} {employee.surname}
          </Text>
          <Text
            style={{
              fontSize: '14px',
              color: 'rgb(100, 116, 139)',
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {employee.position}
          </Text>
        </div>

        {/* Category icons with tooltips */}
        <div style={{ display: 'flex', gap: '16px', flexShrink: 0, alignItems: 'center' }}>
          {employee.recentActivities && Object.entries(
            employee.recentActivities.reduce((acc, act) => {
              acc[act.category] = (acc[act.category] || 0) + 1;
              return acc;
            }, {})
          ).map(([category, count]) => (
            <Tooltip key={category} content={category} showDelay={1500} relationship="description">
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CategoryIcon category={category} />
                <Text style={{ fontSize: '12px', color: 'rgb(71, 85, 105)' }}>
                  {count}
                </Text>
              </div>
            </Tooltip>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--app-border)', flexShrink: 0 }} />

        {/* Points section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', minWidth: '80px', flexShrink: 0 }}>
          <Text style={{ fontSize: '10px', fontWeight: 'bold', color: 'rgb(148, 163, 184)' }}>
            TOTAL
          </Text>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '28px' }}>⭐</span>
            <Text
              weight="bold"
              style={{
                fontSize: '24px',
                color: 'rgb(14, 165, 233)',
              }}
            >
              {employee.points}
            </Text>
          </div>
        </div>

        {/* Expand button */}
        <Button
          appearance="subtle"
          shape="circular"
          size="small"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(14, 165, 233)"
              strokeWidth="2"
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          }
          onClick={() => onToggle(employee.id)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse activities' : 'Expand activities'}
          style={{
            width: '36px',
            height: '36px',
            backgroundColor: 'rgb(241, 245, 249)',
            flexShrink: 0,
          }}
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
