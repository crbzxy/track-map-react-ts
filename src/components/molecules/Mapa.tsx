import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';
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

const iconoPersonalizado = new L.Icon({
  iconUrl: iconoPunto,
  iconSize: [38, 38],
  iconAnchor: [22, 38],
  popupAnchor: [-3, -36],
});

const Mapa: React.FC<MapaProps> = ({ puntos }) => {
  const estiloRuta = {
    color: 'orange',
    weight: 1,
  };

  return (
    <MapContainer
      center={[puntos[0].lat, puntos[0].long]}
      zoom={13}
      style={{ height: '100vh', width: '100vh' }}>
      <TileLayer
        url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <Polyline
        positions={puntos.map((punto) => [punto.lat, punto.long])}
        pathOptions={estiloRuta}
      />
      {puntos.map((punto) => (
        <Marker
          key={`${punto.lat}-${punto.long}-${punto.timestamp}`}
          position={[punto.lat, punto.long]}
          icon={iconoPersonalizado}>
          <Popup>
            <div className='popup-detalle'>
              <h4>{punto.nombre}</h4>
              <p>Timestamp: {new Date(punto.timestamp).toLocaleString()}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Mapa;
