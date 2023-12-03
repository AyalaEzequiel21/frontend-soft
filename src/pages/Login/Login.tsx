import {Button, Container, Grid, Typography, Paper, Box, Stack, useTheme, CircularProgress} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import logo from '@/assets/logo.png'
import { CustomInput } from "@/components/customInput/CustomInput";

interface loginProps {}

type FormValues = {
    user: string,
    password: string
}

export const Login: React.FC<loginProps> = () => {
    
    const navigate = useNavigate()
    const {palette} = useTheme()

    // TODO LO QUE NECESITA EL FORM 

    const [loading, setLoading] = useState(false)

    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
        setLoading(true)
        console.log(data);
        setTimeout(()=> setLoading(false), 2000)
    }

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
                                    value="user"
                                    msgError="Por favor ingrese su nombre de usuario"
                                    error={!!errors.user}
                                    helperText={errors.user?.message}
                                    
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
                                <Button fullWidth type="submit" variant="contained" color="secondary" disabled={loading}><Typography variant="h3">{loading? (<CircularProgress color="inherit" size={30}/>) : "Iniciar"}</Typography></Button>
                            </Stack>
                        </Box>
                    </Paper>
                        <Button variant="contained" sx={{mt:5, backgroundColor: palette.secondary.dark}} onClick={() => navigate('/')}>Home</Button>
                </Grid>
            </Grid>
        </Container>
    )
}