// utils/AuthContext/authContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for login status
  const [userType, setUserType] = useState(''); // Example state for user type

  const login = () => {
    // Example login function that sets isLoggedIn to true
    setIsLoggedIn(true);
    setUserType('buyer'); // Set user type based on login
  };

  const logout = () => {
    // Example logout function that sets isLoggedIn to false
    setIsLoggedIn(false);
    setUserType('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
