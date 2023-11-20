import { Container, Button } from "@mui/material"
// import { useTheme } from '@mui/material/styles';
import React from 'react';
import { DrawerCustom } from "../../components/drawer/DrawerCustom";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

interface homeProps {}

export const Home: React.FC<homeProps> = () => {
    // const theme = useTheme()
    return (
        <>
            <Header />
            <Container>
                <Link to={"/login"}><Button variant="contained" sx={{m: 10}}>Login</Button></Link>
                <DrawerCustom />
            </Container>
            <Footer />
        </>
    )
}