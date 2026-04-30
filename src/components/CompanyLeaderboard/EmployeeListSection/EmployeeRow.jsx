import React from 'react';
import { Text, Button, Tooltip } from '@fluentui/react-components';
import RecentActivityPanel from './RecentActivityPanel';

const CategoryIcon = ({ category }) => {
  const normalizedCategory = (category || '').toLowerCase();

  const icons = {
    lecture: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
        <path d="M4 5h12a2 2 0 0 1 2 2v12H6a2 2 0 0 0-2 2V5z" />
        <path d="M6 5v12" />
        <path d="M10 9h6" />
        <path d="M10 13h6" />
      </svg>
    ),
    conference: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
        <path d="M12 14v7" />
        <path d="M9 21h6" />
        <path d="M7 10a5 5 0 1 1 10 0c0 2-2.2 3.5-5 3.5s-5-1.5-5-3.5z" />
        <path d="M10 10a2 2 0 0 1 4 0" />
      </svg>
    ),
    summit: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
        <path d="M3 19h18" />
        <path d="M5 19 10 10l3 4 2-3 4 8" />
        <path d="M15 5v4" />
        <path d="M15 5h3" />
      </svg>
    ),
    roundtable: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="12" cy="19" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    ),
    summer: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="m4.9 4.9 2.1 2.1" />
        <path d="m17 17 2.1 2.1" />
        <path d="m4.9 19.1 2.1-2.1" />
        <path d="m17 7 2.1-2.1" />
      </svg>
    ),
    default: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M3 10h18" />
      </svg>
    ),
  };

  if (normalizedCategory.includes('summer')) {
    return icons.summer;
  }

  return icons[normalizedCategory] || icons.default;
};

const EmployeeRow = ({ employee, rank, isExpanded, onToggle }) => {
  const avatarSize = 56;

  return (
    <div
      className="employee-card"
      style={{
        backgroundColor: 'var(--app-surface)',
        border: isExpanded ? '1px solid #0ea5e9' : '1px solid transparent',
        borderRadius: '20px',
        overflow: 'hidden',
        marginBottom: '12px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Main row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          height: '96px',
          padding: '20px 24px',
          backgroundColor: 'var(--app-surface)',
          transition: 'background-color 0.15s',
          borderBottom: isExpanded ? 'none' : '1px solid var(--app-border)',
          boxSizing: 'border-box',
        }}
      >
        {/* Position Number */}
        <div
          style={{
            width: '32px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Text
            weight="bold"
            style={{
              fontSize: '24px',
              color: '#94a3b8',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {rank}
          </Text>
        </div>

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
              if (!acc[act.category]) {
                acc[act.category] = {
                  count: 0,
                  names: [],
                };
              }

              acc[act.category].count += 1;
              acc[act.category].names.push(act.name);
              return acc;
            }, {})
          ).map(([category, details]) => (
            <Tooltip
              key={category}
              content={category}
              showDelay={500}
              relationship="description"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CategoryIcon category={category} />
                <Text style={{ fontSize: '12px', color: 'rgb(71, 85, 105)' }}>
                  {details.count}
                </Text>
              </div>
            </Tooltip>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--app-border)', flexShrink: 0 }} />

        {/* Points section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', minWidth: '80px', flexShrink: 0 }}>
          <Text style={{ fontSize: '10px', fontWeight: 'bold', color: 'rgb(148, 163, 184)', width: '100%', textAlign: 'center' }}>
            TOTAL
          </Text>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '28px', color: '#0ea5e9', lineHeight: '1' }}>★</span>
            <Text
              weight="bold"
              style={{
                fontSize: '24px',
                color: '#0ea5e9',
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
            minWidth: '36px',
            padding: '0',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
