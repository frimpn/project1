import React from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
 

  return (
    currentUser ? children : <Navigate to ='/login' />
  );
}

export default PrivateRoute;