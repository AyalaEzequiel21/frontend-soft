import { AppBar, Toolbar, Typography, IconButton, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import { CheckMediumScreen } from '@/utilities/utilityFunction/checkMediaQuery'
import { FlexBetweenBox } from '../utilities/FlexBoxTypes'

interface navBarProp {
    onMenuClick: () => void
}

export const NavBar: React.FC<navBarProp> = ({onMenuClick}) => {
    const isMediumSize = CheckMediumScreen()
    const {palette} = useTheme()
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <FlexBetweenBox width={'100%'}>
                    <FlexBetweenBox>
                        {!isMediumSize && <IconButton color='info' onClick={onMenuClick}><MenuIcon /></IconButton>}
                        <Typography variant='h3'>Praderas</Typography>    
                    </FlexBetweenBox>
                    <FlexBetweenBox>
                    <Typography variant='h2'>User</Typography>    
                     <IconButton color='info' sx={{ml: '10px', '&:hover': {color: palette.secondary.main}}}>
                        <LogoutIcon />
                    </IconButton>
                    </FlexBetweenBox>
                   </FlexBetweenBox>
            </Toolbar>
        </AppBar>
    )
}