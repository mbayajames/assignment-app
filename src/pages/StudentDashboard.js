import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/StudentDashboard.css";

function StudentDashboard() {
  return (
    <div className="student-dashboard-container">
      <Sidebar />
      <div className="student-dashboard-content">
        <h2>Student Dashboard</h2>
        <p>View and submit assignments here.</p>
      </div>
    </div>
  );
}

export default StudentDashboard;
