import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route 
          path="/protected" 
          element={
            <PrivateRoute>
              <h2>Protected Page</h2>
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
