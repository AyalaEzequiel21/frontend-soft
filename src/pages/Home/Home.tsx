import {Box, Drawer, List, ListItem, ListItemText} from "@mui/material"
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { DrawerCustom } from "../../components/drawer/DrawerCustom";

interface homeProps {}

export const Home: React.FC<homeProps> = () => {
    const theme = useTheme()
    return (
        <>
            {/* <Drawer variant="permanent" anchor="left" sx={{marginTop: 5}}>
                <List sx={{backgroundColor: theme.palette.primary.main, color: theme.palette.text.secondary}}>
                    <ListItem>
                        <ListItemText>CLIENTES</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>VENTAS</ListItemText>
                    </ListItem>
                </List>
            </Drawer> */}

            <DrawerCustom />

            {/* <Box 
                sx={{
                    display: 'flex',
                }}
            >
                <Box sx={{backgroundColor: theme.palette.secondary.main, p:5, width:100}}>
                    <h3>pepe</h3>
                </Box>
                <Box sx={{backgroundColor: theme.palette.text.disabled, p:5, width:100}}>
                    <h3>pepe</h3>
                </Box>
                <Box sx={{backgroundColor: theme.palette.background.default, p:5, width:100}}>
                    <h3>pepe</h3>
                </Box>

            </Box> */}
        </>
    )
}