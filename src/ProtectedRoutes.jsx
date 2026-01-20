import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true'; 
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;