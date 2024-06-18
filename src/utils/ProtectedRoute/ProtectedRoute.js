// utils/ProtectedRoute/ProtectedRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../AuthContext/authContext';

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { isLoggedIn, userType } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userType)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Route element={element} />;
};

export default ProtectedRoute;
