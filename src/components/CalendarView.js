import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarView = () => {
  const calendarDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const calendarDates = [25, 26, 27, 28, 29, 30, 31];
  const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

  return (
    <div>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">October 2021</h2>
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {calendarDays.map(day => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
            {day}
          </div>
        ))}
        {calendarDates.map(date => (
          <div 
            key={date}
            className={`text-center p-2 text-sm cursor-pointer rounded ${
              date === 28 ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
            }`}
          >
            {date}
          </div>
        ))}
      </div>

      {/* Time Schedule */}
      <div className="space-y-2 mb-6">
        {timeSlots.map(time => (
          <div key={time} className="flex items-center text-sm">
            <span className="w-12 text-gray-500">{time}</span>
            <div className="flex-1 h-8 relative">
              {time === '09:00' && (
                <div className="absolute inset-0 bg-blue-600 text-white rounded px-2 py-1 text-xs">
                  Dentist
                </div>
              )}
              {time === '11:00' && (
                <div className="absolute inset-0 bg-purple-200 rounded px-2 py-1 text-xs">
                  Physiotherapy
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
