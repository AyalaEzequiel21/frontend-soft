
import { EMethodsApi } from "@/enums/EMethodsApi"
import { ClientMongo } from "@/schemas/clientSchemas"
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction"
import { UseGlobalContext } from "@/utilities/hooks/UseGlobalContext"
import { Button, Typography, Box } from "@mui/material"
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { ResponseError } from "../Login/Login"

interface homeProps {
}

interface ResponseClients {
    ok: boolean,
    data: ClientMongo[]
}

export const Home: React.FC<homeProps> = () => {

    const {contextUser} = UseGlobalContext()
    
    const { data, error, callApi } = UseApiCallFunction<null, ResponseClients, ResponseError>({
        method: EMethodsApi.GET,
        path: '/clients'
    })
    const onClick = () => {
        callApi(null)
    }
    useEffect(()=> {
        if(contextUser === null){
            navigate('/login')
        }
    }, [contextUser ])

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