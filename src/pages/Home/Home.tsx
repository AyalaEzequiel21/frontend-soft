import logo from '../../assets/logo.png'
import {Box} from "@mui/material"
import { useTheme } from '@mui/material/styles';


export const Home = () => {
    const theme = useTheme()
    return (
        <>
            <h1>Home</h1>
            
            <Box sx={{backgroundColor: theme.palette.primary.main, p:5}}>
            <img src={logo}  style={{
                "height": "10em",
                "padding": "1.5em"
            }} alt="logo" />
            </Box>
            <Box sx={{backgroundColor: theme.palette.secondary.main, p:5}}>
                <h3>pepe</h3>
            </Box>
            <Box sx={{backgroundColor: theme.palette.text.disabled, p:5}}>
                <h3>pepe</h3>
            </Box>
            <Box sx={{backgroundColor: theme.palette.background.default, p:5}}>
                <h3>pepe</h3>
            </Box>
        </>
    )
}