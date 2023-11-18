
import logo from '../assets/logo.png'
import { List } from '@mui/material';




export const Prueba = () => {
  return (
    <List sx={{ bgcolor: '#2c3e50', color: '#fff', height: '100vh', width: "300px"}}>
      <img src={logo} alt="logo" style={{height: '8rem', width: '10rem'}}/>
      {/* Opción de Clientes */}
      {/* {mainList.map(item => <ItemList item={item}/>)} */}
    </List>
  );
};
