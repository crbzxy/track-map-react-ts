// src/utils/geoUtils.ts

// Función para calcular distancia entre dos puntos
export function calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3; // Radio de la Tierra en metros
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distancia en metros
}

// Función para ordenar los puntos por distancia
export const ordenarPuntosPorDistancia = (puntos: { lat: number; long: number; timestamp: number; nombre: string; }[]): typeof puntos => {
  const puntoInicio = puntos[0]; // Asumiendo que el primer punto es el punto de inicio
  return [puntoInicio].concat(puntos.slice(1).sort((a, b) => {
    const distanciaA = calcularDistancia(puntoInicio.lat, puntoInicio.long, a.lat, a.long);
    const distanciaB = calcularDistancia(puntoInicio.lat, puntoInicio.long, b.lat, b.long);
    return distanciaA - distanciaB;
  }));
};
