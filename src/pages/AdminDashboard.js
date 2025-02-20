import React from "react";
import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <h2>Admin Dashboard</h2>
        <p>Manage users and assignments here.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
