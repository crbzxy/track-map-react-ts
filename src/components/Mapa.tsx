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
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
  iconSize: [38, 95], // Tamaño del ícono
  iconAnchor: [22, 94], // Punto del ícono que corresponderá a la ubicación del marcador
  popupAnchor: [-3, -76], // Punto desde el cual se mostrará el popup
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
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> '
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
