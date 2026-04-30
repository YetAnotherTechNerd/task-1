import React from 'react';
import CompanyLeaderboard from './components/CompanyLeaderboard/CompanyLeaderboard';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'rgb(248, 250, 252)' }}>
      <div style={{ width: '1204px', maxWidth: '100%', backgroundColor: 'rgb(248, 250, 252)', margin: '0 auto', padding: '0 16px', boxSizing: 'border-box' }}>
        <CompanyLeaderboard />
      </div>
    </div>
  );
}

export default App;
