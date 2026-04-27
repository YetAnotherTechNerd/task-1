import React from 'react';

const MEDAL_CONFIG = {
  1: {
    emoji: '🥇',
    label: '1st Place',
    bg: 'bg-yellow-50',
    border: 'border-yellow-400',
    pointsColor: 'text-yellow-600',
    rankColor: 'text-yellow-500',
  },
  2: {
    emoji: '🥈',
    label: '2nd Place',
    bg: 'bg-gray-100',
    border: 'border-gray-400',
    pointsColor: 'text-gray-600',
    rankColor: 'text-gray-500',
  },
  3: {
    emoji: '🥉',
    label: '3rd Place',
    bg: 'bg-orange-50',
    border: 'border-orange-400',
    pointsColor: 'text-orange-600',
    rankColor: 'text-orange-500',
  },
};

const PodiumCard = ({ position, employee }) => {
  const config = MEDAL_CONFIG[position] || MEDAL_CONFIG[3];

  if (!employee) {
    return (
      <div className={`flex-1 min-w-[180px] h-48 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex items-center justify-center`}>
        <span className="text-gray-400 text-sm">No data</span>
      </div>
    );
  }

  return (
    <div
      className={`
        flex-1 min-w-[180px] rounded-xl border-2 shadow-sm p-5
        flex flex-col items-center text-center gap-2
        ${config.bg} ${config.border}
      `}
    >
      <span className="text-4xl" role="img" aria-label={config.label}>
        {config.emoji}
      </span>
      <div className="font-bold text-gray-900 text-base leading-tight">
        {employee.name} {employee.surname}
      </div>
      <div className="text-xs text-gray-500 leading-tight">
        <div>{employee.position}</div>
        <div>{employee.department}</div>
      </div>
      <div className={`text-2xl font-bold mt-auto ${config.pointsColor}`}>
        {employee.points.toLocaleString()} pts
      </div>
    </div>
  );
};

export default PodiumCard;
