import React from 'react';

const RecentActivityPanel = ({ activities = [] }) => {
  if (!activities.length) {
    return <p className="text-sm text-gray-500 italic">No recent activities recorded.</p>;
  }

  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
        Recent Activities
      </h4>
      <ul className="space-y-2">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="flex items-start justify-between bg-white rounded-lg px-3 py-2 shadow-sm"
          >
            <div>
              <span className="text-xs font-semibold text-indigo-600">{activity.type}</span>
              <p className="text-sm text-gray-700 mt-0.5">{activity.description}</p>
              <span className="text-xs text-gray-400">{activity.date}</span>
            </div>
            <span className="ml-4 text-sm font-bold text-green-600 shrink-0">+{activity.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivityPanel;
