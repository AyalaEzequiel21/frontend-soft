import { AppBar, Toolbar, IconButton } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

interface headerProps {
    onClickButton: ()=> void
}

export const Header: React.FC<headerProps> = ({onClickButton}) => {
    const theme = useTheme()
    return(
       <AppBar
        position="static"
        sx={{backgroundColor: theme.palette.primary.main, zIndex:100, height: '50px'}}
       >
            <Toolbar>
                <IconButton 
                    edge="start"
                    color="inherit"
                    sx={{
                        marginRight: 1,
                        display: { xs: "block", md: "none" },
                        fontSize: "2rem",
                    }}
                    onClick={onClickButton}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
       </AppBar>
    )
}