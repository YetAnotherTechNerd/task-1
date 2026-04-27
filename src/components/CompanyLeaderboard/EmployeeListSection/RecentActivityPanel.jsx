import React from 'react';

const RecentActivityPanel = ({ activities, isExpanded }) => {
  if (!isExpanded) return null;

  if (!activities || activities.length === 0) {
    return (
      <tr>
        <td colSpan={5} className="px-6 py-3 bg-blue-50 text-sm text-gray-500 text-center">
          No recent activities recorded.
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td colSpan={5} className="px-0 py-0 bg-blue-50">
        <div className="px-6 py-3">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
            Recent Activity
          </h4>
          <div className="space-y-1">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm py-1.5 border-b border-blue-100 last:border-0"
              >
                <span className="font-medium text-gray-800 flex-1 min-w-[160px]">
                  {activity.name}
                </span>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                  {activity.category}
                </span>
                <span className="text-xs text-gray-500 min-w-[80px]">
                  {new Date(activity.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <span className="text-xs font-semibold text-green-600 min-w-[60px] text-right">
                  +{activity.points} pts
                </span>
              </div>
            ))}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default RecentActivityPanel;
