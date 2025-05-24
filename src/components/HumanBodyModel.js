import React from 'react';
import { Heart } from 'lucide-react';
import humanBodyImage from '../assets/human body.png';

const HumanBodyModel = () => {
  return (
    <div className='w-full px-4'>
      <div className="flex items-center justify-center relative h-90 bg-[#e6e8fa] rounded-xl shadow-lg p-6 mb-8 ">
        <img
          src={humanBodyImage}
          alt="Human Body Muscles"
          className="w-auto h-[70vh] rounded-xl mx-auto"
        />
        {/* Healthy Heart Badge */}
        <div className="absolute top-32 right-6 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center">
          <Heart className="w-4 h-4 mr-1 text-red-400" />
          Healthy Heart
        </div>
        {/* Healthy Leg Badge */}
        <div className="absolute bottom-32 left-14 bg-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Healthy Leg
        </div>
      </div>
    </div>
  );
};

export default HumanBodyModel;
