import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navigation: React.FC = () => {
  return (
    <AppBar position="fixed" style={{ width: '100%', zIndex: 1000 }}> {/* Fijo en la parte superior con z-index */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Track Route
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/cuentas">Cuentas</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
