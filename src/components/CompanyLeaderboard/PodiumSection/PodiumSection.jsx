import React from 'react';

const MEDAL_CONFIG = {
  1: { emoji: '🥇', bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-700', label: '1st Place' },
  2: { emoji: '🥈', bg: 'bg-gray-100', border: 'border-gray-400', text: 'text-gray-600', label: '2nd Place' },
  3: { emoji: '🥉', bg: 'bg-orange-50', border: 'border-orange-400', text: 'text-orange-700', label: '3rd Place' },
};

const PodiumCard = ({ position, employee }) => {
  const config = MEDAL_CONFIG[position];
  if (!employee) return null;

  return (
    <div
      className={`
        flex flex-col items-center rounded-xl border-2 p-6 shadow-sm
        ${config.bg} ${config.border}
      `}
    >
      <span className="text-4xl" role="img" aria-label={config.label}>
        {config.emoji}
      </span>
      <p className="mt-3 text-lg font-bold text-gray-800">
        {employee.name} {employee.surname}
      </p>
      <p className="text-sm text-gray-500">{employee.position}</p>
      <p className={`text-xs font-medium ${config.text}`}>{employee.department}</p>
      <p className={`mt-3 text-2xl font-extrabold ${config.text}`}>
        {employee.points.toLocaleString()}
        <span className="ml-1 text-sm font-normal">pts</span>
      </p>
    </div>
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
      <h2 className="mb-4 text-lg font-bold text-gray-700">Top Performers</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
