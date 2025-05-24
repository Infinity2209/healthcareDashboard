import React from 'react';

const HealthMetricsCards = () => {
    const healthMetrics = [
        { icon: '🫁', label: 'Lungs', date: 'Sat, 30 Oct 2021', progress: 85, color: 'bg-red-500' },
        { icon: '🦷', label: 'Teeth', date: 'Sun, 31 Oct 2021', progress: 60, color: 'bg-yellow-500' },
        { icon: '🦴', label: 'Bone', date: 'Drink 30 Oct 2021', progress: 40, color: 'bg-orange-500' },
    ];

    return (
        <div className="space-y-4 ">
            {healthMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-between w-full bg-[#e6e8fa]">
                    <div className="flex items-center space-y-4 flex-col">
                        <div className='flex flex-row gap-2'>
                            <div className="text-3xl">{metric.icon}</div>
                            <h3 className="font-semibold text-lg">{metric.label}</h3>
                        </div>
                        <p className="text-gray-500 text-sm">{metric.date}</p>
                    </div>
                    <div className="flex items-center space-y-4">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div
                                className={`h-2 rounded-full ${metric.color}`}
                                style={{ width: `${metric.progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HealthMetricsCards;
