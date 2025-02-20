import React from 'react';
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="d-flex">
        <Sidebar/>
        <div className="flex-grow-1 p-4">
            <h2>Dashboard</h2>
            <p>Welcome to your role-based dashboard.</p>
        </div>
    </div>
  )
}

export default Dashboard;