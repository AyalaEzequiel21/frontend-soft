import logo from '../../assets/logo.png'
import {Box} from "@mui/material"
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { Login } from '../Login/Login';

interface homeProps {}

export const Home: React.FC<homeProps> = () => {
    const theme = useTheme()
    return (
        <>
            <Login />
            
            <Box 
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

            </Box>
        </>
    )
}