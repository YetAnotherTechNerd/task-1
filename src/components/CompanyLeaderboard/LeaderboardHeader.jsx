import React from 'react';

const LeaderboardHeader = ({
  title = 'Leaderboard',
  subtitle = 'Top performers based on contributions and activity',
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-8 border-b border-indigo-100">
      <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{title}</h1>
      <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
    </div>
  );
};

export default LeaderboardHeader;
