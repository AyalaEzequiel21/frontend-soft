import {useState} from 'react'
import { Box, Container, TextField } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import { ButtonForm } from "../../components/button/ButtonForm";
import logo from '../../assets/logo.png'


interface loginProps {}

export const Login: React.FC<loginProps> = () => {

    const theme = useTheme()

    const [values, setValues] = useState({
        user: "",
        password: ""
    })

    const [error, setError] = useState({
        error: false,
        message: "",
      })

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(values.user === "" || values.password === ""){
            setError({
                error: true, 
                message: 'Por favor, complete todos los campos'
            })
        }
        console.log(values);
    
    }

    return (
        <Container sx={{
            height: "100%", 
            p: 2, 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}>
            <img src={logo}  style={{
                "height": "10em",
                "padding": "1"
            }} alt="logo" />
            <Box 
                sx={{
                    border: '2px solid #ccc',
                    padding: '20px',
                    borderRadius: '8px',
                    maxWidth: '400px',
                    display: 'flex',
                    flexDirection: 'column',

                }}
                component={"form"}
                onSubmit={onSubmit}
            >
                <TextField
                    label="Usuario"
                    variant="outlined"
                    id="user"
                    type="text"
                    error={error.error}
                    value={values.user}
                    InputLabelProps={{
                        style: { color: theme.palette.text.primary }, 
                      }}
                    sx={{m:3}}
                    onChange={(e)=> setValues({
                        user: e.target.value, 
                        password: values.password
                    })}
                />

                <TextField
                    label="Contraseña"
                    variant="outlined"
                    id="password"
                    type="password"
                    error={error.error}
                    InputLabelProps={{
                        style: { color: theme.palette.text.primary }, 
                      }}                    
                    value={values.password}
                    sx={{m:3}}
                    onChange={(e)=> setValues({
                        user: values.user, 
                        password: e.target.value
                    })}
                />
                <ButtonForm>
                    Iniciar Sesion
                </ButtonForm>
                {error.error && (
                    <p style={{ color: 'red', marginTop: '10px' }}>{error.message}</p>
                )}
            </Box>
        </Container>
    )
}