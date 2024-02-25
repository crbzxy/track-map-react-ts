import React, { useState, useEffect } from 'react';
import Mapa from '../molecules/Mapa';
import { ordenarPuntosPorDistancia } from '../../utils/geoUtils';
import {
  Grid,
  Button,
  Container,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

const timestampActual = Date.now();

const puntosIniciales = [
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
//-----------------------------------------

const MapaContenedor: React.FC = () => {
  const [puntos, setPuntos] = useState(puntosIniciales);
  const [ordenar, setOrdenar] = useState(false);

  useEffect(() => {
    if (ordenar) {
      setPuntos(ordenarPuntosPorDistancia([...puntosIniciales]));
    } else {
      setPuntos(puntosIniciales);
    }
  }, [ordenar]);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Grid container spacing={3} style={{ width: '100%', marginTop: '20px' }}>
        <Grid item xs={12} md={6}>
          <Mapa puntos={puntos} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Grid
            container
            justifyContent='space-between'
            alignItems='center'
            style={{ width: '100%', marginBottom: '20px' }}>
            <Grid item>
              <Typography variant='h6' component='div'>
                Listado de Puntos
              </Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={() => setOrdenar(!ordenar)}
                variant='contained'
                color='secondary'>
                {ordenar
                  ? 'Mostrar Orden Original'
                  : 'Mostrar Ordenado por Distancia'}
              </Button>
            </Grid>
          </Grid>
          {/* Ajuste de Cards para limitar la altura */}
          {puntos.map((punto, index) => (
            <Card
              key={`${punto.nombre}-${punto.lat}-${punto.long}`}
              sx={{
                minWidth: 275,
                marginBottom: 2,
                maxHeight: 50,
                overflow: 'hidden',
                backgroundColor: '#f9f9f9',
              }}>
              <CardContent
                sx={{
                  p: 1,
                  width: 280,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Typography variant='body2' noWrap>
                  {index + 1}. {punto.nombre}
                </Typography>
                <Typography variant='body2'>
                  Lat: {punto.lat}, Long: {punto.long}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MapaContenedor;
