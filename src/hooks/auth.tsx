import { useState } from 'react';

// Define el hook useAuth
const useAuth = () => {
  // Estado local para almacenar si el usuario está logueado o no
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para realizar el login
  const login = () => {
    setIsLoggedIn(true);
  };

  // Función para realizar el logout
  const logout = () => {
    setIsLoggedIn(false);
  };

  // Retorna el estado de autenticación y las funciones de login/logout
  return { isLoggedIn, login, logout };
};

export default useAuth;
