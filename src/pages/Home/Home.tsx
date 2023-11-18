import { Container } from "@mui/material"
// import { useTheme } from '@mui/material/styles';
import React from 'react';
import { DrawerCustom } from "../../components/drawer/DrawerCustom";

interface homeProps {}

export const Home: React.FC<homeProps> = () => {
    // const theme = useTheme()
    return (
        <Container>
            <DrawerCustom />
        </Container>
    )
}