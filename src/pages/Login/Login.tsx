import {Button} from "@mui/material"
import { useNavigate } from "react-router-dom"



interface loginProps {}

export const Login: React.FC<loginProps> = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1 style={{color: 'black'}}>Login</h1>
            <Button variant="contained" color="secondary" onClick={() => navigate('/')}>Home</Button>
        </>
    )
}