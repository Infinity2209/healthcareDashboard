import React from 'react';

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <div className="appointment-count">3 appointments on this week</div>
      <div className="bar-chart">
        <div className="bar" style={{ height: '40px', backgroundColor: '#4a90e2' }}></div>
        <div className="bar" style={{ height: '60px', backgroundColor: '#50e3c2' }}></div>
        <div className="bar" style={{ height: '30px', backgroundColor: '#f5a623' }}></div>
        <div className="bar" style={{ height: '70px', backgroundColor: '#d0021b' }}></div>
        <div className="bar" style={{ height: '50px', backgroundColor: '#9013fe' }}></div>
        <div className="bar" style={{ height: '20px', backgroundColor: '#b8e986' }}></div>
        <div className="bar" style={{ height: '40px', backgroundColor: '#f8e71c' }}></div>
      </div>
    </div>
  );
};

export default ActivityFeed;
