// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// It now correctly accepts isLoggedIn as a prop from App.js
const ProtectedRoute = ({ isLoggedIn }) => {

    // The logic is now based on the single source of truth from App.js
    return isLoggedIn ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;