import { useState } from 'react';
import { Grid, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Importa componentes de las secciones específicas


export const DrawerCustom = () => {
  const [selectedOption, setSelectedOption] = useState('clientes'); // Opción seleccionada por defecto

  const theme = useTheme()

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    console.log(selectedOption);
    
  };

  // Contenido de la sección según la opción seleccionada
//   const renderSection = () => {
//     switch (selectedOption) {
//       case 'clientes':
//         return <ClientesSection />;
//       case 'ventas':
//         return <VentasSection />;
//       // Agrega más casos según tus secciones
//       default:
//         return <Typography variant="h4">Seleccione una opción</Typography>;
//     }
//   };

  return (
    <Box >
      <Grid container spacing={2}>
        {/* Panel de navegación */}
        <Grid item xs={3}>
          <Drawer variant="permanent" anchor="left" sx={{marginTop: 10, width: "400px"}}>
            <List sx={{backgroundColor: theme.palette.primary.main, color: theme.palette.text.secondary, marginTop: 10}}>
              <ListItem button onClick={() => handleOptionClick('clientes')}>
                <ListItemText primary="Clientes" />
              </ListItem>
              <ListItem button onClick={() => handleOptionClick('ventas')}>
                <ListItemText primary="Ventas" />
              </ListItem>
              <ListItem button onClick={() => handleOptionClick('clientes')}>
                <ListItemText primary="Pagos" />
              </ListItem>
              <ListItem button onClick={() => handleOptionClick('clientes')}>
                <ListItemText primary="Reportes" />
              </ListItem>
              <ListItem button onClick={() => handleOptionClick('clientes')}>
                <ListItemText primary="Listas pedido" />
              </ListItem>
            </List>
          </Drawer>
        </Grid>

        {/* Contenido de la sección */}
        <Grid item xs={9}>
          {/* {renderSection()} */}
        </Grid>
      </Grid>
    </Box>
  );
};
