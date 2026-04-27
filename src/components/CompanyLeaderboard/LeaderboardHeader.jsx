import React from 'react';
import { Text } from '@fluentui/react-components';

const LeaderboardHeader = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #4f46e5, #3b82f6)',
        borderRadius: '12px',
        padding: '40px 32px',
        color: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}
    >
      <Text
        as="h1"
        size={800}
        weight="bold"
        style={{ color: '#fff', display: 'block', letterSpacing: '-0.5px' }}
      >
        Leaderboard
      </Text>
      <Text
        as="p"
        size={400}
        style={{ color: '#c7d2fe', display: 'block', marginTop: '8px' }}
      >
        Top performers based on contributions and activity
      </Text>
    </div>
  );
};

export default LeaderboardHeader;
