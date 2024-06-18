// DashboardLayout.jsx

import React from 'react';
import Sidebar from '../SideBar/Sidebar'; // Import Sidebar component (if separate)

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
    
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
