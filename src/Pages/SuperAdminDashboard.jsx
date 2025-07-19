import React, { useState } from 'react';
import CurdOrg from './CurdOrg';
import CommunicationCenter from './CommunicationCenter';
import GlobalSettings from './GlobalSettings';

const SuperAdminDashboard = () => {
  const [active, setActive] = useState('curdorg');

  return (
    <div className="min-h-screen flex bg-blue-50">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-700 to-blue-500 text-white flex flex-col py-10 px-6 shadow-xl">
        <h1 className="text-2xl font-extrabold mb-10 text-center tracking-wide">Super Admin</h1>
        <button
          className={`mb-4 px-4 py-3 rounded-lg text-left font-semibold transition-all ${active === 'curdorg' ? 'bg-white text-blue-800 shadow' : 'hover:bg-blue-600'}`}
          onClick={() => setActive('curdorg')}
        >
          Organization Management
        </button>
        <button
          className={`mb-4 px-4 py-3 rounded-lg text-left font-semibold transition-all ${active === 'communication' ? 'bg-white text-blue-800 shadow' : 'hover:bg-blue-600'}`}
          onClick={() => setActive('communication')}
        >
          Communication Center
        </button>
        <button
          className={`mb-4 px-4 py-3 rounded-lg text-left font-semibold transition-all ${active === 'settings' ? 'bg-white text-blue-800 shadow' : 'hover:bg-blue-600'}`}
          onClick={() => setActive('settings')}
        >
          Global Settings
        </button>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-10">
        {active === 'curdorg' && <CurdOrg />}
        {active === 'communication' && <CommunicationCenter />}
        {active === 'settings' && <GlobalSettings />}
      </div>
    </div>
  );
};

export default SuperAdminDashboard; 