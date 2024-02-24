import React from 'react';
import Mapa from './components/Mapa';
import { ordenarPuntosPorDistancia } from './utils/geoUtils';



const timestampActual = Date.now(); // Este sería el valor a usar para todos


const puntos = [
  {
    lat: 19.432608,
    long: -99.133209,
    timestamp: timestampActual,
    nombre: 'Centro Histórico de la Ciudad de México',
  },
  {
    lat: 19.35532,
    long: -99.062243,
    timestamp: timestampActual,
    nombre: 'Palacio de Bellas Artes',
  },
  {
    lat: 19.4139793,
    long: -99.1817883,
    timestamp: timestampActual,
    nombre: 'Bosque de Chapultepec',
  },
  {
    lat: 19.28693,
    long: -99.136479,
    timestamp: timestampActual,
    nombre: 'Estadio Azteca',
  },
  {
    lat: 19.294693,
    long: -99.0275612,
    timestamp: timestampActual,
    nombre: 'Canal de Xochimilco',
  },
  {
    lat: 19.417475,
    long: -99.164752,
    timestamp: timestampActual,
    nombre: 'La Condesa',
  },
];

const puntosOrdenados = ordenarPuntosPorDistancia(puntos);

const App: React.FC = () => {
  return (
    <div className='App'>
      <Mapa puntos={puntosOrdenados} />
    </div>
  );
};

export default App;