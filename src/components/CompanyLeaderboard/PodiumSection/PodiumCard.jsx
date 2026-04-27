import React from 'react';

const PodiumCard = ({ employee, rank, medal }) => {
  const { name, surname, department, points } = employee;

  return (
    <div className="flex flex-col items-center">
      {/* Medal + Name */}
      <div className="flex flex-col items-center mb-2">
        <span className="text-3xl mb-1">{medal.label}</span>
        <p className="text-sm font-semibold text-gray-800 text-center">
          {name} {surname}
        </p>
        <p className="text-xs text-gray-500 text-center">{department}</p>
        <p className={`text-sm font-bold mt-1 ${medal.textClass}`}>
          {points.toLocaleString()} pts
        </p>
      </div>
      {/* Podium block */}
      <div
        className={`w-24 ${medal.heightClass} ${medal.bgClass} border-t-2 rounded-t-lg flex items-start justify-center pt-2`}
      >
        <span className="text-lg font-bold text-gray-600">#{rank}</span>
      </div>
    </div>
  );
};

export default PodiumCard;
