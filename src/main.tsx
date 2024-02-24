import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css'; // Asegúrate de que este archivo tenga tus estilos personalizados
import 'leaflet/dist/leaflet.css'; // Importa el CSS de Leaflet

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
