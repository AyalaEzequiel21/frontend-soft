import {Drawer} from "@mui/material"
// import { useTheme } from '@mui/material/styles';
import React from 'react';
import { Prueba } from '../../components/prueba';

interface homeProps {}

export const Home: React.FC<homeProps> = () => {
    // const theme = useTheme()
    return (
        <>
            <Drawer variant="permanent" anchor="left" sx={{display: { xs: "none", sm: "block" }, width: "400px"}}>
                <Prueba/>
            </Drawer>
        </>
    )
}