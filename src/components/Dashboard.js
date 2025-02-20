import React from 'react';
import Sidebar from "./Sidebar";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
        <Sidebar/>
        <div className="dashboard-content">
            <h2>Dashboard</h2>
            <p>Welcome to your role-based dashboard.</p>
        </div>
    </div>
  )
}

export default Dashboard;