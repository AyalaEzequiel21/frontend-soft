import {  Button, Grid } from "@mui/material"
// import { useTheme } from '@mui/material/styles';
import React, {useState} from 'react';
import { DrawerCustom } from "../../components/drawer/DrawerCustom";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
// import { ClientesSection } from "../../components/sections/ClientesSection";
// import { VentasSection } from "../../components/sections/VentasSection";
// import { PagosSection } from "../../components/sections/PagosSection";
// import { ReportesSection } from "../../components/sections/ReportesSection";
// import { ListasSection } from "../../components/sections/ListasSection";

interface homeProps {}

export const Home: React.FC<homeProps> = () => {
    // const theme = useTheme()

    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerOpen = () => {
        setDrawerOpen(true)
    }

    const handleDrawerClose = () => {
        setDrawerOpen(false)
    }

//     const [selectedOption, setSelectedOption] = useState('clientes'); // Opción seleccionada por defecto

//   const renderSection = () => {
//     switch (selectedOption) {
//       case 'clientes':
//         return <ClientesSection />;
//       case 'ventas':
//         return <VentasSection />;
//       case 'pagos':
//         return <PagosSection />;
//       case 'reportes':
//         return <ReportesSection />;
//       case 'listas':
//         return <ListasSection />;
//       // Agrega más casos según tus secciones
//       default:
//         return <>jajaja</>;
//     }
//   };

    return (
        <Grid container>
            <Header onClickButton={handleDrawerOpen}/>
            <Grid item container>
                <Grid item xs={3}>
                    <DrawerCustom isOpen={drawerOpen} onClose={handleDrawerClose}/>
                </Grid>
                {/* <Box sx={{height: '85vh'}}>{}</Box> */}
                <Grid item xs={9}>
                    <h2>home</h2>
                    <Link to={"/login"}><Button variant="contained" sx={{m: 10}}>Login</Button></Link>
                </Grid>
            </Grid>
            <Footer />
        </Grid>
    )
}