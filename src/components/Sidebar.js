import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { getUserRole, logout } from "../auth";  


function Sidebar() {
    const role = getUserRole();
    const navigate = useNavigate();

  return (
    <div className="d-flex flex-column vh-100 p-3 bg-dark text-white" style={{ width: "250px" }}>
        <h2 className="text-center mb-4">Assignment App</h2>

        <nav className="nav flex-column">
            <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
            <Link to="/assignment" className="nav-link text-white">Assignment</Link>

            {role === "admin" &&(
                <Link to="/admin" className="nav-link text-white">Admin</Link>
            )}

            {role === "student" &&(
                <Link to="/student" className="nav-link text-white">Student</Link>
            )}
        </nav>

        <button onClick={() => {logout(); navigate("/");}} className="btn btn-danger mt-auto">Logout</button>
    </div>
  )
}

export default Sidebar;