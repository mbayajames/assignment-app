import React from "react";
import Sidebar from "./Sidebar";
import "../styles/Assignment.css";

function Assignment() {
  return (
    <div className="assignment-container">
      <Sidebar />
      <div className="assignment-content">
        <h2>Assignment</h2>
        <p>Here you will manage assignments.</p>
      </div>
    </div>
  );
}

export default Assignment;
