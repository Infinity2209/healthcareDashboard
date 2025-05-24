import React from 'react';

const UpcomingSchedule = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4">The Upcoming Schedule</h3>
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-3">On Thursday</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-purple-100 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Health checkup complete</span>
              <span className="text-lg">📋</span>
            </div>
            <div className="text-xs text-gray-600">11:00 AM</div>
          </div>
          <div className="bg-purple-100 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Ophthalmologist</span>
              <span className="text-lg">👁️</span>
            </div>
            <div className="text-xs text-gray-600">14:00 PM</div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-3">On Saturday</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-red-100 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Cardiologist</span>
              <span className="text-lg">❤️</span>
            </div>
            <div className="text-xs text-gray-600">12:00 AM</div>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Neurologist</span>
              <span className="text-lg">🧠</span>
            </div>
            <div className="text-xs text-gray-600">16:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
