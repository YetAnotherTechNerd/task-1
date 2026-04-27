import React from 'react';
import PodiumCard from './PodiumCard';

const medals = ['gold', 'silver', 'bronze'];
// Classic podium display order: 2nd (left), 1st (center), 3rd (right)
const podiumDisplayOrder = [1, 0, 2];

const PodiumSection = ({ topThree }) => {
  if (!topThree || topThree.length === 0) return null;

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white px-6 py-8 border-b border-gray-200">
      <h2 className="text-center text-lg font-semibold text-gray-600 mb-6 uppercase tracking-wider">
        Top Performers
      </h2>

      {/* Desktop: flex row | Mobile: flex col */}
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-4">
        {podiumDisplayOrder.map((dataIndex) => {
          const employee = topThree[dataIndex];
          if (!employee) return null;
          const position = dataIndex + 1;
          return (
            <PodiumCard
              key={employee.id}
              position={position}
              employee={employee}
              medal={medals[dataIndex]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PodiumSection;
