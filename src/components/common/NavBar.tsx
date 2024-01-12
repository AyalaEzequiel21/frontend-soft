import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import { CheckMediumScreen } from '@/utilities/utilityFunction/checkMediaQuery'
import { FlexBetweenBox } from '../utilities/FlexBoxTypes'
import { UseGlobalContext } from '@/utilities/hooks/UseGlobalContext'
import { UserAvatar } from './UserAvatar'

interface navBarProp {
    onMenuClick: () => void
}

export const NavBar: React.FC<navBarProp> = ({onMenuClick}) => {
    const isMediumSize = CheckMediumScreen()
    const {contextUser, logoutContext} = UseGlobalContext()
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <FlexBetweenBox width={'100%'}>
                    <FlexBetweenBox>
                        {!isMediumSize && <IconButton color='info' onClick={onMenuClick}><MenuIcon /></IconButton>}
                        <Typography variant='h3'>Business Admin</Typography>    
                    </FlexBetweenBox>
                    <FlexBetweenBox>
                    {contextUser?.username != null && <UserAvatar username={contextUser.username}/>}
                     <IconButton color='info' onClick={() => logoutContext()} sx={{ml: '10px'}}>
                        <LogoutIcon />
                    </IconButton>
                    </FlexBetweenBox>
                   </FlexBetweenBox>
            </Toolbar>
        </AppBar>
    )
}