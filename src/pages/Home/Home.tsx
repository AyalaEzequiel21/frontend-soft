// import { EMethodsApi } from "@/enums/EMethodsApi"
// import useApi from "@/hooks/UseApiCall"
import { Button, Typography, Box } from "@mui/material"
// import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

interface homeProps {
}

export const Home: React.FC<homeProps> = () => {

    // const apiResponse = useApi({
    //     method: EMethodsApi.GET,
    //     path: '/api/character/2',
    //     data: null
    // })

    // useEffect(()=> {console.log(apiResponse);
    // }, [])

    const navigate = useNavigate()
    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Typography variant="h1">Bienvenido</Typography>
            <Button variant="contained" color="secondary" sx={{height: '100px'}} onClick={() => navigate('/login')}>Login</Button>
        </Box>
       
    )
}