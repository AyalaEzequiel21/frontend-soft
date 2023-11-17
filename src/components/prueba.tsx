
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AccountBox, ShoppingCart, Payment, Assessment, FormatListBulleted } from '@mui/icons-material';



export const Prueba = () => {
  return (
    <List sx={{ bgcolor: '#2c3e50', color: '#fff', height: '100vh', width: "300px"}}>
      <img src={logo} alt="logo" style={{height: '8rem', width: '10rem'}}/>
      {/* Opción de Clientes */}
      <ListItem button component={Link} to="/clientes">
        <ListItemIcon >
          <AccountBox sx={{color: '#fff'}}/>
        </ListItemIcon>
        <ListItemText primary="Clientes" />
      </ListItem>
      {/* Opción de Ventas */}
      <ListItem button component={Link} to="/ventas">
        <ListItemIcon>
          <ShoppingCart sx={{color: '#fff'}}/>
        </ListItemIcon>
        <ListItemText primary="Ventas" />
      </ListItem>
      {/* Opción de Pagos */}
      <ListItem button component={Link} to="/pagos">
        <ListItemIcon>
          <Payment sx={{color: '#fff'}}/>
        </ListItemIcon>
        <ListItemText primary="Pagos" />
      </ListItem>
      {/* Opción de Reportes */}
      <ListItem button component={Link} to="/reportes">
        <ListItemIcon>
          <Assessment sx={{color: '#fff'}}/>
        </ListItemIcon>
        <ListItemText primary="Reportes" />
      </ListItem>
      {/* Opción de Listas */}
      <ListItem button component={Link} to="/listas">
        <ListItemIcon>
          <FormatListBulleted sx={{color: '#fff'}}/>
        </ListItemIcon>
        <ListItemText primary="Listas" />
      </ListItem>
    </List>
  );
};
