import React from 'react';

const ActivityChart = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
            <h3 className="font-semibold text-lg mb-4">Activity</h3>
            <div className="text-sm text-gray-500 mb-4">3 appointment on this week</div>
            <div className="flex items-end space-x-2 h-32">
                {days.map((day) => (
                    <div key={day} className="flex flex-col items-center space-y-2 flex-1">
                        <div className="flex flex-col space-y-1 items-center">
                            <div className="w-3 h-8 bg-blue-200 rounded"></div>
                            <div className="w-3 h-12 bg-blue-400 rounded"></div>
                            <div className="w-3 h-6 bg-cyan-300 rounded"></div>
                        </div>
                        <span className="text-xs text-gray-500">{day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityChart;
