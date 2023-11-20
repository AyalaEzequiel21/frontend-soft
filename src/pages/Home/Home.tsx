import { Container, Button } from "@mui/material"
// import { useTheme } from '@mui/material/styles';
import React from 'react';
import { DrawerCustom } from "../../components/drawer/DrawerCustom";
import { Link } from "react-router-dom";

interface homeProps {}

export const Home: React.FC<homeProps> = () => {
    // const theme = useTheme()
    return (
        <Container>
            <Link to={"/login"}><Button variant="contained" sx={{m: 10}}>Login</Button></Link>
            <DrawerCustom />
        </Container>
    )
}