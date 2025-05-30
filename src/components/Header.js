import React from 'react';
import { Search, Bell, Plus, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-[#4e01fc]">Dashboard</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>This Week</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Bell className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">👨‍⚕️</span>
            </div>
            <button className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Plus className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
