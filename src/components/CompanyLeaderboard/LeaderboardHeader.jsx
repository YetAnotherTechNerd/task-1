import React from 'react';

const LeaderboardHeader = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl px-8 py-10 text-white shadow">
      <h1 className="text-4xl font-bold tracking-tight">Leaderboard</h1>
      <p className="mt-2 text-lg text-indigo-100">
        Top performers based on contributions and activity
      </p>
    </div>
  );
};

export default LeaderboardHeader;
