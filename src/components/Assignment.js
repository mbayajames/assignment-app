import React from "react";
import Sidebar from "./Sidebar";

function Assignment() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <h2>Assignments</h2>
        <p>Here you will manage assignments.</p>
      </div>
    </div>
  );
}

export default Assignment;
