import React from 'react';
import PodiumCard from './PodiumCard';

const PodiumSection = ({ topThree }) => {
  if (!topThree || topThree.length === 0) {
    return (
      <div className="px-6 py-10 text-center text-gray-400 text-sm">
        No top performers to display. Adjust the filters above.
      </div>
    );
  }

  return (
    <div className="px-6 py-6 bg-white border-b border-gray-200">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
        Top Performers
      </h2>
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {[0, 1, 2].map((idx) => (
          <PodiumCard
            key={topThree[idx]?.id ?? idx}
            position={idx + 1}
            employee={topThree[idx] ?? null}
          />
        ))}
      </div>
    </div>
  );
};

export default PodiumSection;
