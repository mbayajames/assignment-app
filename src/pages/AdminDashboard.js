import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-dashboard-content">
        <h2>Admin Dashboard</h2>
        <p>Manage users and assignments here.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
