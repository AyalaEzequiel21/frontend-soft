import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import { CheckMediumScreen } from '@/utilities/utilityFunction/checkMediaQuery'
import { FlexBetweenBox } from '../utilities/FlexBoxTypes'
import { UserAvatar } from './UserAvatar'
import { UseAuth } from '@/utilities/hooks/UseAuth'

interface navBarProp {
    onMenuClick: () => void
}

export const NavBar: React.FC<navBarProp> = ({onMenuClick}) => {
    const isMediumSize = CheckMediumScreen()
    const {userLoged, logout} = UseAuth()
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <FlexBetweenBox width={'100%'}>
                    <FlexBetweenBox>
                        {!isMediumSize && <IconButton color='info' onClick={onMenuClick}><MenuIcon /></IconButton>}
                        <Typography variant='h3'>Business Admin</Typography>    
                    </FlexBetweenBox>
                    <FlexBetweenBox>
                    {userLoged?.username != null && <UserAvatar username={userLoged.username}/>}
                     <IconButton color='info' onClick={() => { 
                        logout()
                     }} sx={{ml: '10px'}}>
                        <LogoutIcon />
                    </IconButton>
                    </FlexBetweenBox>
                   </FlexBetweenBox>
            </Toolbar>
        </AppBar>
    )
}