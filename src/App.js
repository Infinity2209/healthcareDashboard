import React from 'react';
import './App.css';
import HealthcareDashboard from './components/HealthcareDashboard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <HealthcareDashboard />
    </>
  );
}

export default App;
