import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconoPunto from '../../assets/punto.png';

interface Punto {
  long: number;
  lat: number;
  timestamp: number;
  nombre: string;
}

interface MapaProps {
  puntos: Punto[];
}

// Función para crear un icono personalizado con el número de orden
const crearIconoPersonalizado = (orden: number) => {
  return L.divIcon({
    html: `<div style="position: relative; text-align: center;">
             <img src="${iconoPunto}" style="width: 38px; height: 38px;"/>
             <span style="position: absolute; top: 33%; left: 50%; transform: translate(-50%, -50%); color: black; font-weight: bold; font-size:10px">${orden}</span>
           </div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 38], // Ajuste para centrar el icono y el número
    className: '' // Eliminar clases adicionales para evitar estilos no deseados
  });
};

const Mapa: React.FC<MapaProps> = ({ puntos }) => {
  const estiloRuta = {
    color: 'orange',
    weight: 1,
  };

  // Componente para ajustar los límites del mapa
  const AjustarVista = ({ puntos }: { puntos: Punto[] }) => {
    const map = useMap();
    useEffect(() => {
      if (puntos.length > 0) {
        const grupo = new L.LatLngBounds(puntos.map(punto => [punto.lat, punto.long]));
        map.fitBounds(grupo);
      }
    }, [puntos, map]);
    return null;
  };

  return (
    <MapContainer
      center={[puntos[0]?.lat ?? 0, puntos[0]?.long ?? 0]}
      zoom={13}
      style={{ height: '70vh' }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <Polyline
        positions={puntos.map((punto) => [punto.lat, punto.long])}
        pathOptions={estiloRuta}
      />
      {puntos.map((punto, index) => (
        <Marker
          key={`${punto.lat}-${punto.long}-${punto.timestamp}`}
          position={[punto.lat, punto.long]}
          icon={crearIconoPersonalizado(index + 1)}>
          <Popup>
            <div className='popup-detalle'>
              <h4>{punto.nombre}</h4>
              <p>Timestamp: {new Date(punto.timestamp).toLocaleString()}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      <AjustarVista puntos={puntos} />
    </MapContainer>
  );
};

export default Mapa;
