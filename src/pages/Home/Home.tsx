import {  Typography, Box } from "@mui/material"

interface homeProps {
}

export const Home: React.FC<homeProps> = () => {

    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Typography variant="h1">Bienvenido</Typography>
        </Box>
       
    )
}