import React from 'react';
import Sidebar from './Sidebar';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';
import DashboardOverview from './DashboardOverview';

import { navigationLinks, setting } from '../data/navigationLinks';
import healthStatusIndicators from '../data/healthStatus';
import calendarAppointments from '../data/calendarAppointments';
import upcomingAppointments from '../data/upcomingAppointments';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content" style={{ display: 'flex', height: '100vh', backgroundColor: '#f5f7ff' }}>
      <Sidebar menuSections={navigationLinks || []} setting={setting || {}} />
      <main className="main-content" style={{ flexGrow: 1, padding: '30px 40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <DashboardOverview />
        <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2fr', gap: '30px' }}>
          <div className="left-column" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <AnatomySection healthStatusIndicators={healthStatusIndicators || []} />
            <ActivityFeed />
          </div>
          <div className="middle-column" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <HealthStatusCards />
          </div>
          <div className="right-column" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <CalendarView
              days={calendarAppointments?.days || []}
              timeSlots={calendarAppointments?.timeSlots || []}
              selectedSlots={calendarAppointments?.selectedSlots || {}}
              onNavigate={() => {}}
            />
            <UpcomingSchedule schedule={upcomingAppointments || []} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardMainContent;
