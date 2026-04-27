import React from 'react';
import { Card, Text, Badge } from '@fluentui/react-components';

const MEDAL_CONFIG = {
  1: {
    emoji: '🥇',
    bg: '#fffbeb',
    border: '#f59e0b',
    textColor: '#b45309',
    label: '1st Place',
  },
  2: {
    emoji: '🥈',
    bg: '#f9fafb',
    border: '#9ca3af',
    textColor: '#4b5563',
    label: '2nd Place',
  },
  3: {
    emoji: '🥉',
    bg: '#fff7ed',
    border: '#fb923c',
    textColor: '#c2410c',
    label: '3rd Place',
  },
};

const PodiumCard = ({ position, employee }) => {
  const config = MEDAL_CONFIG[position];
  if (!employee) return null;

  return (
    <Card
      style={{
        backgroundColor: config.bg,
        border: `2px solid ${config.border}`,
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      }}
    >
      <span
        role="img"
        aria-label={config.label}
        style={{ fontSize: '36px', lineHeight: 1 }}
      >
        {config.emoji}
      </span>
      <Text
        size={500}
        weight="bold"
        style={{ color: '#1f2937', marginTop: '12px', textAlign: 'center' }}
      >
        {employee.name} {employee.surname}
      </Text>
      <Text size={200} style={{ color: '#6b7280', textAlign: 'center' }}>
        {employee.position}
      </Text>
      <Badge
        appearance="tint"
        style={{
          backgroundColor: config.bg,
          color: config.textColor,
          borderColor: config.border,
          fontSize: '11px',
        }}
      >
        {employee.department}
      </Badge>
      <Text
        size={700}
        weight="bold"
        style={{ color: config.textColor, marginTop: '12px' }}
      >
        {employee.points.toLocaleString()}
        <Text
          size={200}
          weight="regular"
          style={{ color: config.textColor, marginLeft: '4px' }}
        >
          pts
        </Text>
      </Text>
    </Card>
  );
};

const PodiumSection = ({ topThree }) => {
  if (!topThree || topThree.length === 0) {
    return null;
  }

  // Reorder for visual podium: 2nd | 1st | 3rd
  const podiumOrder = [
    { position: 2, employee: topThree[1] },
    { position: 1, employee: topThree[0] },
    { position: 3, employee: topThree[2] },
  ];

  return (
    <div>
      <Text
        as="h2"
        size={500}
        weight="bold"
        style={{ color: '#374151', display: 'block', marginBottom: '16px' }}
      >
        Top Performers
      </Text>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}
      >
        {podiumOrder.map(({ position, employee }) =>
          employee ? (
            <PodiumCard key={position} position={position} employee={employee} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default PodiumSection;
