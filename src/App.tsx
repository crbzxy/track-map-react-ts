// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/molecules/Navigation';
import MapaContenedor from './components/organism/MapaContenedor';
import Login from './views/Login';
import Cuentas from './views/Cuentas';

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Routes>
          <Route path="/" element={<MapaContenedor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cuentas" element={<Cuentas />} />
          {/* Ruta para manejar rutas no encontradas */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
