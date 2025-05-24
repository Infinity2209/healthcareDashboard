import React from 'react';

const AppointmentCards = () => {
    return (
        <div className="space-x-3 mb-6 grid grid-cols-2 gap-4 w-full">
            <div className="bg-blue-600 text-white p-4 rounded-lg flex flex-col h-full">
                <div className="flex items-center justify-between">
                    <span className="font-medium">Dentist</span>
                    <span className="text-2xl">🦷</span>
                </div>
                <div className="text-sm opacity-90 mt-1">09:00-11:00</div>
                <div className="text-sm opacity-90">Dr Cameron Williamson</div>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg flex flex-col h-full">
                <div className="flex items-center justify-between ">
                    <span className="font-medium text-purple-800">Physiotherapy Appointment</span>
                    <span className="text-2xl">🏃‍♂️</span>
                </div>
                <div className="text-sm text-purple-600 mt-1">11:00-12:00</div>
                <div className="text-sm text-purple-600">Dr Kevin Djores</div>
            </div>
        </div>
    );
};

export default AppointmentCards;
