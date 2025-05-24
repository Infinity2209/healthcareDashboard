import React from 'react';
import { 
  Calendar, 
  MessageSquare, 
  HelpCircle, 
  Settings, 
  BarChart3, 
  Clock, 
  Users 
} from 'lucide-react';

const Sidebar = () => {
  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: Clock, label: 'History' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Users, label: 'Appointments' },
    { icon: 'Activity', label: 'Statistics' }, // Will replace with icon in main component
  ];

  const toolItems = [
    { icon: MessageSquare, label: 'Chat' },
    { icon: HelpCircle, label: 'Support' },
  ];

  return (
    <div className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg flex flex-col justify-between h-screen">
      <div>
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-cyan-400">Health</span>
            <span className="text-2xl font-bold text-gray-800">care.</span>
          </div>
        </div>
        <nav className="mt-8">
          <div className="px-6 mb-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">General</p>
          </div>
          {sidebarItems.map((item, index) => {
            const Icon = item.icon === 'Activity' ? require('lucide-react').Activity : item.icon;
            return (
              <a
                key={index}
                href="#"
                className={`flex items-center px-6 py-3 text-sm font-medium ${
                  item.active
                    ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </a>
            );
          })}
          <div className="px-6 mt-8 mb-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Tools</p>
          </div>
          {toolItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="p-6">
        <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
          <Settings className="mr-3 h-5 w-5" />
          Setting
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
