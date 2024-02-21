import React from 'react';
import { Navigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('token');
  const currentPath = window.location.pathname;

  if (isLoggedIn) {
    // User is logged in
    if (currentPath === '/') {
      // Redirect to dashboard or another page
      return <Navigate to='/dashboard' replace />;
    } else {
      // Allow access to children
      return children;
    }
  } else {
    // User is not logged in, redirect to login page
    return <Navigate to='/login' />;
  }
};

export default Auth;
