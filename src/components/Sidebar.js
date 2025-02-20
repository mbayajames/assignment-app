import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getUserRole, logout } from "../auth";  
import "../styles/Sidebar.css";


function Sidebar() {
    const role = getUserRole();
    const navigate = useNavigate();

  return (
    <div className="sidebar">
        <h2>Assignment App</h2>

        <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/assignment">Assignment</Link>

            {role === "admin" &&(
                <Link to="/admin">Admin</Link>
            )}

            {role === "student" &&(
                <Link to="/student">Student</Link>
            )}
        </nav>

        <button onClick={() => {logout(); navigate("/");}}>Logout</button>
    </div>
  )
}

export default Sidebar;