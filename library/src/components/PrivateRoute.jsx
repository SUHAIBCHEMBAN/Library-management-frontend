// src/components/PrivateRoute.jsx

import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const accessToken = localStorage.getItem('access');
  return (
    <Route
      {...rest}
      element={accessToken ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
