import React from 'react';
import { Heart } from 'lucide-react';

const HumanBodyModel = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 w-full">
      <div className="flex items-center justify-center relative">
        <div className="relative w-48 h-96 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full mx-auto">
          {/* Placeholder for human body silhouette */}
          <div className="absolute inset-4 bg-gradient-to-b from-red-300 via-red-400 to-red-500 rounded-full"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-orange-200 rounded-full"></div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-red-400 rounded-lg"></div>
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-red-500 rounded-lg"></div>
        </div>
        {/* Healthy Heart Badge */}
        <div className="absolute top-32 -right-4 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center">
          <Heart className="w-4 h-4 mr-1 text-red-400" />
          Healthy Heart
        </div>
        {/* Healthy Leg Badge */}
        <div className="absolute bottom-8 -left-8 bg-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Healthy Leg
        </div>
      </div>
    </div>
  );
};

export default HumanBodyModel;
