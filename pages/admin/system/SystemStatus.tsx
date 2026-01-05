import React, { useState } from 'react';
import { Server, Activity, Shield, Terminal, AlertTriangle, CheckCircle, Power } from 'lucide-react';

export const SystemStatus = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  
  const logs = [
    { time: '10:42:01 AM', level: 'INFO', msg: 'Backup completed successfully.' },
    { time: '10:35:12 AM', level: 'WARN', msg: 'High memory usage detected (82%).' },
    { time: '10:15:00 AM', level: 'INFO', msg: 'User admin@nextgen.com logged in.' },
    { time: '09:55:23 AM', level: 'ERROR', msg: 'Payment gateway timeout (Stripe).' },
    { time: '09:00:01 AM', level: 'INFO', msg: 'Daily cron jobs executed.' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-heading font-bold uppercase text-gray-900">System Status</h1>
          <p className="text-gray-500 text-sm">Monitor server health, logs, and API configurations.</p>
        </div>
        <div className="flex items-center gap-2">
            <span className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full ${maintenanceMode ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {maintenanceMode ? <AlertTriangle className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
                {maintenanceMode ? 'Maintenance Mode' : 'Operational'}
            </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Health Stats */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <div className="flex items-center gap-3 mb-4">
             <Activity className="w-5 h-5 text-blue-600" />
             <h3 className="font-bold uppercase text-sm">Server Load</h3>
           </div>
           <div className="space-y-3">
             <div>
               <div className="flex justify-between text-xs mb-1">
                 <span>CPU</span>
                 <span className="font-bold">45%</span>
               </div>
               <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-500 w-[45%]"></div>
               </div>
             </div>
             <div>
               <div className="flex justify-between text-xs mb-1">
                 <span>Memory</span>
                 <span className="font-bold text-yellow-600">82%</span>
               </div>
               <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-yellow-500 w-[82%]"></div>
               </div>
             </div>
             <div>
               <div className="flex justify-between text-xs mb-1">
                 <span>Storage</span>
                 <span className="font-bold">24%</span>
               </div>
               <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 w-[24%]"></div>
               </div>
             </div>
           </div>
        </div>

        {/* Maintenance Control */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <div className="flex items-center gap-3 mb-4">
             <Power className="w-5 h-5 text-red-600" />
             <h3 className="font-bold uppercase text-sm">Maintenance Mode</h3>
           </div>
           <p className="text-xs text-gray-500 mb-4">Enable this to show a "Under Construction" page to visitors. Admins can still access the dashboard.</p>
           <button 
             onClick={() => setMaintenanceMode(!maintenanceMode)}
             className={`w-full py-2 text-sm font-bold uppercase rounded border transition ${maintenanceMode ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
           >
             {maintenanceMode ? 'Disable Maintenance Mode' : 'Enable Maintenance Mode'}
           </button>
        </div>

        {/* API Keys */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <div className="flex items-center gap-3 mb-4">
             <Shield className="w-5 h-5 text-purple-600" />
             <h3 className="font-bold uppercase text-sm">API Keys</h3>
           </div>
           <div className="space-y-3">
              <div>
                <p className="text-xs font-bold text-gray-500 mb-1">Stripe Public Key</p>
                <div className="bg-gray-50 p-2 rounded text-xs font-mono truncate text-gray-600">pk_live_51Hy...9x2A</div>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 mb-1">Google Gemini API</p>
                <div className="bg-gray-50 p-2 rounded text-xs font-mono truncate text-gray-600">AIzaSy...8x9L</div>
              </div>
              <button className="text-xs font-bold underline text-black">Manage Keys</button>
           </div>
        </div>
      </div>

      {/* Logs Console */}
      <div className="bg-black text-green-400 p-6 rounded-xl font-mono text-xs md:text-sm h-96 overflow-y-auto shadow-lg border border-gray-800">
         <div className="flex items-center gap-2 border-b border-gray-800 pb-2 mb-4">
           <Terminal className="w-4 h-4" />
           <span className="font-bold">System Logs</span>
         </div>
         <div className="space-y-2">
           {logs.map((log, i) => (
             <div key={i} className="flex gap-4">
               <span className="opacity-50 whitespace-nowrap">[{log.time}]</span>
               <span className={`font-bold ${
                 log.level === 'INFO' ? 'text-blue-400' :
                 log.level === 'WARN' ? 'text-yellow-400' :
                 log.level === 'ERROR' ? 'text-red-500' : 'text-gray-400'
               }`}>{log.level}</span>
               <span>{log.msg}</span>
             </div>
           ))}
           <div className="animate-pulse">_</div>
         </div>
      </div>
    </div>
  );
};