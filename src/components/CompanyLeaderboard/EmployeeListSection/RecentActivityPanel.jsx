import React from 'react';
import { Text } from '@fluentui/react-components';

const RecentActivityPanel = ({ activities }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  if (!activities || activities.length === 0) {
    return (
      <div
        style={{
          padding: '16px 24px',
          fontSize: '14px',
          color: '#6b7280',
          fontStyle: 'italic',
          backgroundColor: 'rgb(248, 250, 252)',
          borderTop: '1px solid var(--app-border)',
        }}
      >
        No recent activities recorded.
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: 'rgb(248, 250, 252)',
        borderTop: '1px solid var(--app-border)',
        padding: '16px 8px',
      }}
    >
      <Text
        size={100}
        weight="bold"
        style={{
          display: 'block',
          marginBottom: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'rgb(100, 116, 139)',
          fontSize: '12px',
        }}
      >
        Recent Activity
      </Text>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '8px 1px', width: '66.5%', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: 'rgb(100, 116, 139)', borderBottom: '1px solid var(--app-border)' }}>Activity</th>
              <th style={{ textAlign: 'left', padding: '8px 1px', width: '14.8%', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: 'rgb(100, 116, 139)', borderBottom: '1px solid var(--app-border)' }}>Category</th>
              <th style={{ textAlign: 'left', padding: '8px 1px', width: '11.5%', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: 'rgb(100, 116, 139)', borderBottom: '1px solid var(--app-border)' }}>Date</th>
              <th style={{ textAlign: 'right', padding: '8px 1px', width: '7.2%', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: 'rgb(100, 116, 139)', borderBottom: '1px solid var(--app-border)' }}>Points</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id} style={{ borderBottom: '1px solid var(--app-border)' }}>
                <td style={{ padding: '16px 1px', fontSize: '14px', fontWeight: '700', color: 'rgb(30, 41, 59)', width: '66.5%' }}>
                  {activity.name}
                </td>
                <td style={{ padding: '16px 1px', width: '14.8%' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '16px', padding: '0 10px', borderRadius: '999px', backgroundColor: 'rgb(226, 232, 240)', fontSize: '12px', fontWeight: '700', color: 'rgb(71, 85, 105)' }}>
                    {activity.category}
                  </div>
                </td>
                <td style={{ padding: '16px 1px', fontSize: '12px', color: 'rgb(100, 116, 139)', width: '11.5%' }}>
                  {formatDate(activity.date)}
                </td>
                <td style={{ padding: '16px 1px', fontSize: '14px', fontWeight: '700', color: 'rgb(14, 165, 233)', textAlign: 'right', width: '7.2%' }}>
                  +{activity.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivityPanel;
