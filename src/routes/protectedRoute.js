import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('@jwtToken');
      if (!token) {
        navigate('/login');
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [navigate]);

  if (!isAuthenticated) {
    return null; // Or some minimal placeholder without significant visual impact
  }

  return <Outlet />;
};

export default ProtectedRoute;