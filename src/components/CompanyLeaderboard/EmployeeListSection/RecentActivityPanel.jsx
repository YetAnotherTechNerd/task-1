import React from 'react';

const RecentActivityPanel = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return (
      <div className="px-6 py-4 text-sm text-gray-500 italic">
        No recent activities recorded.
      </div>
    );
  }

  return (
    <div className="bg-indigo-50 border-t border-indigo-100 px-6 py-4">
      <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-600">
        Recent Activity
      </h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs font-semibold uppercase text-indigo-400">
              <th className="pb-2 pr-4">Activity</th>
              <th className="pb-2 pr-4">Category</th>
              <th className="pb-2 pr-4">Date</th>
              <th className="pb-2 text-right">Points</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr
                key={activity.id}
                className="border-t border-indigo-100 hover:bg-indigo-100/50 transition-colors"
              >
                <td className="py-2 pr-4 font-medium text-gray-800">
                  {activity.name}
                </td>
                <td className="py-2 pr-4 text-gray-600">{activity.category}</td>
                <td className="py-2 pr-4 text-gray-500">{activity.date}</td>
                <td className="py-2 text-right font-semibold text-indigo-600">
                  +{activity.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivityPanel;
