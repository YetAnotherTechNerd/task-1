import React from 'react';
import useFilters from '../../hooks/useFilters';
import LeaderboardHeader from './LeaderboardHeader';
import FilterSection from './FilterSection/FilterSection';
import PodiumSection from './PodiumSection/PodiumSection';
import EmployeeListSection from './EmployeeListSection/EmployeeListSection';

const CompanyLeaderboard = () => {
  const {
    filters,
    expandedRows,
    availableYears,
    availableQuarters,
    availableCategories,
    filteredData,
    topThree,
    handleFilterChange,
    toggleRowExpansion,
  } = useFilters();

  return (
    <div className="max-w-5xl mx-auto my-8 bg-white rounded-2xl shadow-lg overflow-hidden">
      <LeaderboardHeader
        title="Leaderboard"
        subtitle="Top performers based on contributions and activity"
      />

      <FilterSection
        filters={filters}
        availableYears={availableYears}
        availableQuarters={availableQuarters}
        availableCategories={availableCategories}
        onFilterChange={handleFilterChange}
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
