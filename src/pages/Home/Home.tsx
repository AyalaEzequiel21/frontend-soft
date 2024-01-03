
import { EMethodsApi } from "@/enums/EMethodsApi"
import { ClientMongo } from "@/schemas/clientSchemas"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { Button, Typography, Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

interface homeProps {
}

interface ResponseClients {
    ok: boolean,
    data: ClientMongo[]
}

export const Home: React.FC<homeProps> = () => {
    
    const [cookie, setCookie] = useState<string>()

    const { data, error, isLoading, callApi } = UseApiCallFunction<null, ResponseClients>({
        method: EMethodsApi.GET,
        path: '/clients'
    })
    const onClick = () => {
        callApi(null)
        setCookie(document.cookie)
    }
    useEffect(()=> {
        // const jwtToken = document.cookie.replace(
        //     /(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/,
        //     "$1"
        //   );
      
        //   if (!jwtToken) {
        //     // No se encontró un token, redirigir al login
        //     navigate("/login");
        //   }
        console.log(cookie);
        
    }, [cookie])

    useEffect(()=> {
        console.log(data, error);
    }, [data, error])

    const navigate = useNavigate()
    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Typography variant="h1">Bienvenido</Typography>
            <Button variant="contained" color="secondary" sx={{height: '100px'}} onClick={() => navigate('/login')}>Login</Button>
            <Button variant="contained" color="secondary" sx={{height: '100px'}} onClick={onClick}>Get clients</Button>
        </Box>
       
    )
}