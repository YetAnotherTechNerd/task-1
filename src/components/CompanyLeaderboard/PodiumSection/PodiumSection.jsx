import React from 'react';
import PodiumCard from './PodiumCard';

const podiumOrder = [1, 0, 2]; // display order: 2nd, 1st, 3rd

const PodiumSection = ({ topThree }) => {
  if (!topThree || topThree.length === 0) return null;

  const medals = [
    { label: '🥇', rank: 1, heightClass: 'h-32', bgClass: 'bg-gold-100 border-gold-400', textClass: 'text-gold-700' },
    { label: '🥈', rank: 2, heightClass: 'h-24', bgClass: 'bg-silver-100 border-silver-400', textClass: 'text-silver-600' },
    { label: '🥉', rank: 3, heightClass: 'h-20', bgClass: 'bg-bronze-100 border-bronze-400', textClass: 'text-bronze-700' },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white px-6 py-8 border-b border-gray-200">
      <h2 className="text-center text-lg font-semibold text-gray-600 mb-6 uppercase tracking-wider">
        Top Performers
      </h2>
      <div className="flex items-end justify-center gap-4">
        {podiumOrder.map((index) => {
          const employee = topThree[index];
          if (!employee) return null;
          const medal = medals[index];
          return (
            <PodiumCard
              key={employee.id}
              employee={employee}
              rank={index + 1}
              medal={medal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PodiumSection;
