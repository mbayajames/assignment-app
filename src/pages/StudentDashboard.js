import React from "react";
import Sidebar from "../components/Sidebar";

function StudentDashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <h2>Student Dashboard</h2>
        <p>View and submit assignments here.</p>
      </div>
    </div>
  );
}

export default StudentDashboard;
