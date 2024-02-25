import React from 'react';
import { Navigate } from 'react-router-dom';
import MapaContenedor from '../components/organism/MapaContenedor';
import { Container, Typography } from '@mui/material';
import useAuth from '../hooks/auth'; // Importa el hook useAuth desde el archivo correcto

const Home: React.FC = () => {
  const { isLoggedIn } = useAuth(); // Obtiene el estado de autenticación

  // Verifica si el usuario está logueado
  if (isLoggedIn) {
    // Si no está logueado, redirige al componente de Login
    return <Navigate to="/login" />;
  }

  // Si está logueado, muestra el MapaContenedor
  return (
    <Container maxWidth="xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

      <MapaContenedor />
    </Container>
  );
};

export default Home;
