import React from 'react';
import Header from './Header';
import HumanBodyModel from './HumanBodyModel';
import HealthMetricsCards from './HealthMetricsCards';
import ActivityChart from './ActivityChart';
import CalendarView from './CalendarView';
import AppointmentCards from './AppointmentCards';
import UpcomingSchedule from './UpcomingSchedule';

const HealthcareDashboard = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col flex-col overflow-hidden ml-64">
        <Header />
        <div className="flex flex-1 overflow-hidden p-8 space-x-8 ">
          {/* Left Content */}
          <div className='flex flex-col w-full'>
            <div className="flex-1 flex flex-row justify-between gap-4">
              <HumanBodyModel />
              <HealthMetricsCards />
            </div>
            <ActivityChart />
          </div>

          {/* Right Sidebar */}
          <div className="w-96 flex flex-col space-y-6 w-[70%]">
            <CalendarView />
            <AppointmentCards />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareDashboard;
