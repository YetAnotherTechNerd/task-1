import React from 'react';

/**
 * Format an ISO date string (YYYY-MM-DD) to a readable format (e.g. "Mar 15, 2025").
 */
const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

/**
 * Return a Tailwind text color class based on point value.
 * 0–100 → gray, 101–200 → blue, 201+ → gold
 */
const getPointsColorClass = (points) => {
  if (points > 200) return 'text-gold-700 font-bold';
  if (points > 100) return 'text-blue-600 font-semibold';
  return 'text-gray-500 font-medium';
};

/**
 * Return a Tailwind badge color class based on category/type name.
 */
const getCategoryBadgeClass = (category) => {
  const lower = (category || '').toLowerCase();
  if (lower.includes('code') || lower.includes('technical') || lower.includes('architect')) {
    return 'bg-blue-100 text-blue-700';
  }
  if (lower.includes('revenue') || lower.includes('sales') || lower.includes('customer')) {
    return 'bg-green-100 text-green-700';
  }
  if (lower.includes('mentor') || lower.includes('lead') || lower.includes('team')) {
    return 'bg-purple-100 text-purple-700';
  }
  if (lower.includes('bug') || lower.includes('fix') || lower.includes('security')) {
    return 'bg-red-100 text-red-700';
  }
  return 'bg-gray-100 text-gray-600';
};

const RecentActivityPanel = ({ activities = [], isExpanded }) => {
  if (!isExpanded) return null;

  return (
    <div className="w-full bg-gray-50 p-4 rounded">
      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
        Recent Activity
      </h4>

      {activities.length === 0 ? (
        <p className="text-sm text-gray-400 italic">No recent activities</p>
      ) : (
        <ul className="space-y-2">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="flex items-center justify-between bg-white rounded-lg px-3 py-2 shadow-sm"
            >
              {/* Left: name + category + date */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 min-w-0">
                <span className="text-sm font-medium text-gray-800 truncate">
                  {activity.description}
                </span>
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${getCategoryBadgeClass(activity.type)}`}
                >
                  {activity.type}
                </span>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {formatDate(activity.date)}
                </span>
              </div>

              {/* Right: points */}
              <span
                className={`ml-4 text-sm shrink-0 ${getPointsColorClass(activity.points)}`}
              >
                +{activity.points.toLocaleString()} pts
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentActivityPanel;
