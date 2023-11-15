import { Box, IconButton } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';


export const Header = () => {
    const theme = useTheme()
    return(
        <Box 
        sx={{
            height: 50,
            backgroundColor: theme.palette.primary.main
        }}
        component={"header"}
        >
            <IconButton sx={{marginLeft: 1}}>
                <MenuIcon 
                sx={{
                    color: theme.palette.text.secondary,
                    display: { xs: "block", sm: "none" },
                    fontSize: "2rem"
                }}
                />
            </IconButton>
        </Box>
    )
}