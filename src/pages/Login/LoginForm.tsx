import { useTheme } from '@mui/material/styles';
import { Stack, TextField, Typography, CircularProgress  } from '@mui/material'
import { ButtonForm } from '../../components/button/ButtonForm';
import { useForm } from 'react-hook-form'
import { useState } from 'react';

interface loginFormProps {}

type FormValues = {
    user: string,
    password: string
}


export const LoginForm: React.FC<loginFormProps> = () => {
    
    const [loading, setLoading] = useState(false)
    
    const theme = useTheme()

    const form = useForm<FormValues>({
        defaultValues: {
            user: "",
            password: ""
        }
    })

    const {register, handleSubmit, formState: {errors}} = form

    const onSubmit = (data: FormValues) => {
        setLoading(true)
        console.log(data);
        setTimeout(()=> setLoading(false), 2000)
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)} style={{width: '100%', maxWidth: '335px'}}>
            <Typography variant='h6' textAlign={'center'} m={1} sx={{color: theme.palette.primary.main}}>Iniciar Sesión</Typography>
            <Stack spacing={3}>
                <TextField 
                    label='Usuario' 
                    type='text'
                    {...register("user", {
                        required: "Por favor ingrese su nombre de usuario"
                    })}
                    error={!!errors.user}
                    helperText={errors.user?.message}
                    fullWidth
                    InputLabelProps={{
                        style: { color: theme.palette.text.primary }, 
                      }}
                />
                <TextField 
                    label='Contraseña' 
                    type='password'
                    {...register("password", {
                        required: "Por favor ingrese su contraseña"
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    fullWidth
                    InputLabelProps={{
                        style: { color: theme.palette.text.primary }, 
                      }}
                />
                <ButtonForm mt={true} sizeXL={true}>{loading? (<CircularProgress color="inherit" size={30}/>) : "Login"}</ButtonForm>
            </Stack>
        </form>
    )
}