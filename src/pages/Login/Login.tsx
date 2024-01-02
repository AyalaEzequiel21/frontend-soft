import {Button, Container, Grid, Typography, Paper, Box, Stack, useTheme, CircularProgress} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useEffect } from 'react';
import logo from '@/assets/logo.png'
import { CustomInput } from "@/components/customInput/CustomInput";
import { EMethodsApi } from "@/enums/EMethodsApi";
import { UseApiCallFunction } from "@/utilities/hooks/UseApiCallFunction";
// import axios, { AxiosError, AxiosResponse } from "axios";

interface loginProps {}

type FormValues = {
    email: string,
    password: string
}

export const Login: React.FC<loginProps> = () => {
    
    const navigate = useNavigate()
    const {palette} = useTheme()

    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>()
    const { data, error, isLoading, callApi } = UseApiCallFunction<FormValues>({
        method: EMethodsApi.POST,
        path: '/auth/login'
    })

    const onSubmit = async (dataForm: FormValues) => {
        callApi(dataForm)
    }

useEffect(() => {
    if(data?.data && data.headers){
        const cookieHeader = data.headers;
        // const [, cookieValue] = cookieHeader.match(/jwt=([^;]+)/);
        // localStorage.setItem('jwtToken', cookieValue);

        console.log(data.data, cookieHeader)
        navigate('/')
    }
}, [data, error])

    return (
        <Container maxWidth={false} sx={{backgroundColor: palette.primary.light}}>
            <Grid
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{minHeight: '100vh'}}
            >
                <Grid item sx={{width: {xs: '280px', sm: '350px', lg: '400px'}}}>
                    <Paper elevation={10} sx={{p: '1em', borderRadius: '0.5em'}}>
                        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={2} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant="h2" sx={{textAlign: 'center', fontWeight: 'bold', color: palette.secondary.dark}}>Iniciar Sesión</Typography>    
                                <Box 
                                    component='img'
                                    src={logo}
                                    alt="logo"
                                    sx={{ height: 170, width: 220}}
                                />
                                <CustomInput 
                                    type="text"
                                    label="Usuario"
                                    register={register}
                                    value="email"
                                    msgError="Por favor ingrese su nombre de usuario"
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                    
                                />
                                <CustomInput 
                                    type="password" 
                                    label='Contraseña' 
                                    register={register}
                                    value="password"
                                    msgError="Por favor ingrese su contraseña"
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                />
                                <Button fullWidth type="submit" variant="contained" color="secondary" disabled={isLoading}><Typography variant="h3">{isLoading? (<CircularProgress color="inherit" size={30}/>) : "Iniciar"}</Typography></Button>
                                {error && 
                                    <Box>
                                        <Typography>Ha ocurrido un error durante la conexion</Typography>
                                    </Box>}
                            </Stack>
                        </Box>
                    </Paper>
                        <Button variant="contained" sx={{mt:5, backgroundColor: palette.secondary.dark}} onClick={() => navigate('/')}>Home</Button>
                </Grid>
            </Grid>
        </Container>
    )
}