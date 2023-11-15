import { Box } from "@mui/material"
import { useTheme } from '@mui/material/styles';
// import MenuIcon from '@mui/icons-material/Menu';


export const Footer = () => {
    const theme = useTheme()
    return(
        <Box 
        sx={{
            height: 50,
            backgroundColor: theme.palette.primary.main
        }}
        component={"footer"}
        >
        </Box>
    )
}