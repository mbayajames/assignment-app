import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Assignment from "./components/Assignment";
import Login from "./components/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import PrivateRoute from "./PrivateRoute";
import { getUserRole, isAuthenticated } from "./auth";

function App() {
  return (
    <Router>
            <Routes>
                  {/* Public Route - Login */} 
                  <Route path="/" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Login />} />

                  {/* Protect Routes - Only for Authenticated Users */}
                  <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
                  <Route path="/assignment" element={<PrivateRoute><Assignment/></PrivateRoute>} />

                  {/* Role-Based Routes */}
                  <Route path="/admin" element={<PrivateRoute role="admin"><AdminDashboard/></PrivateRoute>} />
                  <Route path="/student" element={<PrivateRoute role="student"><StudentDashboard/></PrivateRoute>} />

                  {/* Redirect unknown routes */}
                  <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
    </Router>
  )
}

export default App;