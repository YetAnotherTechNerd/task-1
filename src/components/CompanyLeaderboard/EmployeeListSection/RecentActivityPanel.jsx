import React from 'react';
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Text,
} from '@fluentui/react-components';

const RecentActivityPanel = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return (
      <div
        style={{
          padding: '16px 24px',
          fontSize: '14px',
          color: '#6b7280',
          fontStyle: 'italic',
        }}
      >
        No recent activities recorded.
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: '#eef2ff',
        borderTop: '1px solid #e0e7ff',
        padding: '16px 24px',
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
          color: '#4f46e5',
        }}
      >
        Recent Activity
      </Text>
      <div style={{ overflowX: 'auto' }}>
        <Table size="small" style={{ width: '100%' }}>
          <TableHeader>
            <TableRow>
              <TableHeaderCell style={{ color: '#818cf8', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>Activity</TableHeaderCell>
              <TableHeaderCell style={{ color: '#818cf8', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>Category</TableHeaderCell>
              <TableHeaderCell style={{ color: '#818cf8', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>Date</TableHeaderCell>
              <TableHeaderCell style={{ color: '#818cf8', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', textAlign: 'right' }}>Points</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  <Text size={200} weight="semibold" style={{ color: '#1f2937' }}>
                    {activity.name}
                  </Text>
                </TableCell>
                <TableCell>
                  <Text size={200} style={{ color: '#4b5563' }}>{activity.category}</Text>
                </TableCell>
                <TableCell>
                  <Text size={200} style={{ color: '#6b7280' }}>{activity.date}</Text>
                </TableCell>
                <TableCell style={{ textAlign: 'right' }}>
                  <Text size={200} weight="semibold" style={{ color: '#4f46e5' }}>
                    +{activity.points}
                  </Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RecentActivityPanel;
