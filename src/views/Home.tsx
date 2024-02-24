import React from 'react';
import {  Navigate } from 'react-router-dom';
import MapaContenedor from '../components/organism/MapaContenedor';
import useAuth from '../hooks/auth';

const Home: React.FC = () => {
  const { isLoggedIn } = useAuth(); // Obtiene el estado de autenticación

  // Verifica si el usuario está logueado
  if (!isLoggedIn) {
    // Si no está logueado, redirige al componente de Login
    return <Navigate to="/login" />;
  }

  // Si está logueado, muestra el MapaContenedor
  return <MapaContenedor />;
};

export default Home;
