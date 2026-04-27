import React, { useState, useCallback } from 'react';
import LeaderboardHeader from './LeaderboardHeader';
import FilterSection from './FilterSection/FilterSection';
import PodiumSection from './PodiumSection/PodiumSection';
import EmployeeListSection from './EmployeeListSection/EmployeeListSection';
import useFilters from '../../hooks/useFilters';

const CompanyLeaderboard = ({ data = [] }) => {
  const {
    filters,
    availableYears,
    availableQuarters,
    availableCategories,
    filteredData,
    topThree,
    handleFilterChange,
    resetFilters,
  } = useFilters(data);

  const [expandedRows, setExpandedRows] = useState(new Set());

  const toggleRowExpansion = useCallback((employeeId) => {
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
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden my-8">
      <LeaderboardHeader />
      <FilterSection
        filters={filters}
        availableYears={availableYears}
        availableQuarters={availableQuarters}
        availableCategories={availableCategories}
        onFilterChange={handleFilterChange}
        onReset={resetFilters}
      />
      <PodiumSection topThree={topThree} />
      <EmployeeListSection
        employees={filteredData}
        expandedRows={expandedRows}
        onToggleExpand={toggleRowExpansion}
      />
    </div>
  );
};

export default CompanyLeaderboard;
