import React from 'react';

const medalConfig = {
  gold: {
    emoji: '🥇',
    bg: 'bg-gold-100',
    border: 'border-gold-400',
    shadow: 'shadow-lg',
    pointsColor: 'text-gold-700',
    badgeBg: 'bg-gold-400',
    badgeText: 'text-white',
  },
  silver: {
    emoji: '🥈',
    bg: 'bg-silver-100',
    border: 'border-silver-400',
    shadow: 'shadow-md',
    pointsColor: 'text-silver-600',
    badgeBg: 'bg-silver-400',
    badgeText: 'text-white',
  },
  bronze: {
    emoji: '🥉',
    bg: 'bg-bronze-100',
    border: 'border-bronze-400',
    shadow: 'shadow-md',
    pointsColor: 'text-bronze-700',
    badgeBg: 'bg-bronze-400',
    badgeText: 'text-white',
  },
};

const ordinalLabel = { 1: '1st', 2: '2nd', 3: '3rd' };

const PodiumCard = ({ position, employee, medal }) => {
  const config = medalConfig[medal] || medalConfig.bronze;
  const { name, surname, department, position: jobTitle, points } = employee;

  return (
    <div
      className={`
        flex flex-col items-center justify-between
        h-56 rounded-lg p-6 border-2
        ${config.bg} ${config.border} ${config.shadow}
        transition-transform duration-200 hover:scale-105
        w-full sm:w-52
      `}
    >
      {/* Medal emoji */}
      <span className="text-4xl" aria-label={`${ordinalLabel[position]} place medal`}>
        {config.emoji}
      </span>

      {/* Employee details */}
      <div className="flex flex-col items-center text-center flex-1 justify-center mt-2">
        <p className="text-base font-bold text-gray-900 leading-tight">
          {name} {surname}
        </p>
        <p className="text-xs text-gray-500 mt-1">{jobTitle}</p>
        <p className="text-xs text-gray-400">{department}</p>
      </div>

      {/* Points */}
      <div className="flex flex-col items-center mt-2">
        <span className={`text-2xl font-extrabold ${config.pointsColor}`}>
          {points.toLocaleString()}
        </span>
        <span className="text-xs text-gray-500 font-medium">points</span>
      </div>

      {/* Position badge */}
      <span
        className={`mt-2 px-2 py-0.5 rounded-full text-xs font-semibold ${config.badgeBg} ${config.badgeText}`}
      >
        {ordinalLabel[position]} Place
      </span>
    </div>
  );
};

export default PodiumCard;
