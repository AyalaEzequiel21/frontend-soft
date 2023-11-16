import { Box, IconButton } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

interface headerProps {}

export const Header: React.FC<headerProps> = () => {
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