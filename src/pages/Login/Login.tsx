import {useState} from 'react'
import { Box, Container, TextField } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import { ButtonForm } from "../../components/button/ButtonForm";
import logo from '../../assets/logo.png'
import axios from 'axios';


interface loginProps {}

export const Login: React.FC<loginProps> = () => {

    const theme = useTheme()

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        error: false,
        message: "",
      })

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(values.email === "" || values.password === ""){
            setError({
                error: true, 
                message: 'Por favor, complete todos los campos'
            })
        }
        try{
            const response = await axios.post(`https://api-praderas.onrender.com/praderaAPI/auth/login`, values)
            console.log(response)  
            
        } catch(error){
            console.log(error);
            setError({
                error: true, 
                message: "Error al iniciar session. Por favor, intentalo de nuevo"
            })
        }
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
                    value={values.email}
                    InputLabelProps={{
                        style: { color: theme.palette.text.primary }, 
                      }}
                    sx={{m:3}}
                    onChange={(e)=> setValues({
                        email: e.target.value, 
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
                        email: values.email, 
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