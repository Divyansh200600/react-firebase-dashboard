// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext/authContext';
import Home from './pages/Home/Home';
import Login from './components/LoginComponent/Login';
import Signup from './components/LoginComponent/Signup';
import GoogleLogin from './components/LoginComponent/GoogleLogin';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import ProtectedRoute from './utils/ProtectedRoute/ProtectedRoute'; // Ensure correct import path

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/google-login" element={<GoogleLogin />} />
          <Route
            path="/"
            element={<ProtectedRoute element={<DashboardLayout />} />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
