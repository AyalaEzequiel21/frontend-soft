import { Paper, Container, CssBaseline } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import logo from '../../assets/logo.png'
import { LoginForm } from './LoginForm';
import { CheckMediumScreen } from "../../utilities/utilityFunction/checkMediaQuery";


interface loginProps {}

export const Login: React.FC<loginProps> = () => {

    const theme = useTheme()
    const isMediumScreen = CheckMediumScreen()
    const containerMaxWidth = isMediumScreen ? 'md' : 'xs';

    return (
        <Container 
            component={'main'}
            maxWidth={containerMaxWidth}
        >
            <CssBaseline />
            <Paper 
                elevation={3}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: theme.spacing(4),
                    marginTop: theme.spacing(10),
                }}
            >
                <img src={logo}  style={{
                    "height": "10em",
                    "padding": "1"
                }} alt="logo" />
                <LoginForm/>
            </Paper>
        </Container>
    )
}