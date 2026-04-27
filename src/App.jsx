import React from 'react';
import CompanyLeaderboard from './components/CompanyLeaderboard/CompanyLeaderboard';
import { employeeData } from './data/mockEmployeeData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CompanyLeaderboard data={employeeData} />
    </div>
  );
}

export default App;
