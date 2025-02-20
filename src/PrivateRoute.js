import React from 'react';
import { Navigate } from "react-router-dom";
import { isAuthenticated, getUserRole } from "./auth";


const PrivateRoute = ({ children, role }) => {
    if (!isAuthenticated()){
        return <Navigate to="/" />;
    }

    if (role && getUserRole() !== role) {
        return <Navigate to="/dashboard"/>;
    }
  return children;
}

export default PrivateRoute;