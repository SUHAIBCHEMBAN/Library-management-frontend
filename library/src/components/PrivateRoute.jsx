import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const accessToken = localStorage.getItem('access');
  return accessToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
