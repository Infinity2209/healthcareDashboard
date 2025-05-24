import React from 'react';
import AnatomyCard from './AnatomyCard';
import HealthCard from './HealthCard';

const Dashboard = ({ healthCards }) => {
  return (
    <section className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-top">
        <AnatomyCard />
        <div className="health-cards">
          {healthCards.map((card, idx) => (
            <HealthCard
              key={idx}
              icon={card.icon}
              title={card.title}
              date={card.date}
              progress={card.progress}
              color={card.color}
            />
          ))}
        </div>
      </div>
      <div className="activity-chart">
        <h3>Activity</h3>
        <div className="chart-placeholder">
          {/* Placeholder for chart */}
          <p>Chart goes here</p>
        </div>
        <div className="week-labels">
          <span>Mon</span><span>Tues</span><span>Wed</span><span>Thurs</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
        <div className="appointment-info">3 appointment on this week</div>
      </div>
    </section>
  );
};

export default Dashboard;
