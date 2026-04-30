import React from 'react';
import { Text } from '@fluentui/react-components';

const LeaderboardHeader = () => {
  return (
    <div
      style={{
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '67px',
      }}
    >
      <Text
        as="h1"
        weight="bold"
        style={{
          fontSize: '30px',
          color: 'rgb(15, 23, 42)',
          display: 'block',
          margin: '0',
          whiteSpace: 'nowrap',
          lineHeight: '1.2',
        }}
      >
        Leaderboard
      </Text>
      <Text
        as="p"
        style={{
          fontSize: '14px',
          color: 'rgb(100, 116, 139)',
          display: 'block',
          margin: '0',
          lineHeight: '1.2',
        }}
      >
        Top performers based on contributions and activity
      </Text>
    </div>
  );
};

export default LeaderboardHeader;
