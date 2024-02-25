import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/molecules/Navigation';
import Home from './views/Home'; // Importa el componente Home
import Login from './views/Login';
import Cuentas from './views/Cuentas';
import { Container} from '@mui/material'; 

const AppContainer: React.FC = () => {
  return (
    <>
       {/* Aplica estilos base para una apariencia consistente */}
      {/* Navegador con zIndex 1 */}
      <Navigation />
      {/* Contenedor de las vistas de las rutas con zIndex 0 */}
      <Container component="main">
        {/* Ajusta el ancho máximo al máximo posible y proporciona margen en la parte superior */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para el componente Home */}
          <Route path="/login" element={<Login />} />
          <Route path="/cuentas" element={<Cuentas />} />
          {/* Ruta para manejar rutas no encontradas */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <AppContainer />
      </div>
    </Router>
  );
};

export default App;
