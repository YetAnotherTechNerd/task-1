import React, { useState, useCallback } from 'react';
import mockEmployeeData from '../../data/mockEmployeeData';
import useFilters from '../../hooks/useFilters';
import LeaderboardHeader from './LeaderboardHeader';
import FilterSection from './FilterSection/FilterSection';
import PodiumSection from './PodiumSection/PodiumSection';
import EmployeeListSection from './EmployeeListSection/EmployeeListSection';

const CompanyLeaderboard = () => {
  const {
    filters,
    availableYears,
    availableQuarters,
    availableCategories,
    filteredData,
    topThree,
    handleFilterChange,
  } = useFilters(mockEmployeeData);

  const [expandedRows, setExpandedRows] = useState(new Set());

  const handleToggleExpand = useCallback((employeeId) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(employeeId)) {
        next.delete(employeeId);
      } else {
        next.add(employeeId);
      }
      return next;
    });
  }, []);

  return (
    <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '32px 16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <LeaderboardHeader />

      <FilterSection
        years={availableYears}
        quarters={availableQuarters}
        categories={availableCategories}
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      <PodiumSection topThree={topThree} />

      <EmployeeListSection
        employees={filteredData}
        expandedRows={expandedRows}
        onToggleExpand={handleToggleExpand}
      />
    </div>
  );
};

export default CompanyLeaderboard;
