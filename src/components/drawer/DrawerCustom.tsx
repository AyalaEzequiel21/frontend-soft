import { useState } from 'react';
import { Grid, Drawer, List, Box } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import logo from '../../assets/logo.png'
import { mainList } from '../../utilities/mainList';
import { ItemList } from '../itemList/ItemList';
import { ClientesSection } from '../sections/ClientesSection';
import { VentasSection } from '../sections/VentasSection';
import { PagosSection } from '../sections/PagosSection';
import { ReportesSection } from '../sections/ReportesSection';
import { ListasSection } from '../sections/ListasSection';


export const DrawerCustom = () => {
  const [selectedOption, setSelectedOption] = useState('clientes'); // Opción seleccionada por defecto

  // const theme = useTheme()

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);    
  };

  // Contenido de la sección según la opción seleccionada
  const renderSection = () => {
    switch (selectedOption) {
      case 'clientes':
        return <ClientesSection />;
      case 'ventas':
        return <VentasSection />;
      case 'pagos':
        return <PagosSection />;
      case 'reportes':
        return <ReportesSection />;
      case 'listas':
        return <ListasSection />;
      // Agrega más casos según tus secciones
      default:
        return <>jajaja</>;
    }
  };


  return (
    <Box sx={{height: "100vh"}}>
      <Grid container spacing={2}>
        {/* Panel de navegación */}
        <Grid item xs={4}>
          <Drawer variant="permanent" anchor="left" sx={{display: { xs: "none", sm: "block" }, width: "100%", height: '100%'}}>
            <List sx={{ bgcolor: '#2c3e50', color: '#fff', height: '100%', width: "300px"}}>
              <img src={logo} alt="logo" style={{height: '8rem', width: '10rem'}}/>
              {/* Opción de Clientes */}
              {mainList.map(item => <ItemList item={item} setSelected={handleOptionClick}/>)}
            </List>
          </Drawer>
        </Grid>

        {/* Contenido de la sección */}
        <Grid item xs={8}>
          {renderSection()}
          {/* <LoginForm/> */}
        </Grid>
      </Grid>
    </Box>
  );
};
