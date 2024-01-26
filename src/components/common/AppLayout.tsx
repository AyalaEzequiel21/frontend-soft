import { Box, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { SideBar } from './SideBar'
import { getStoredUser } from '@/utilities/utilityFunction/getStoredUser'
import { UseAuth } from '@/utilities/hooks/UseAuth'

export const AppLayout: React.FC<object> = () => {
    const [isOpenSideBar, setIsOpenSideBar] = useState(false)
    const {login} = UseAuth()
    const navigate = useNavigate()
    const handleOpenSideBar = () => {
        setIsOpenSideBar(true)
    }
    const handleCloseSideBar = () => {
        setIsOpenSideBar(false)
    }

    useEffect(()=> {
        const userLoged = getStoredUser()
        if(userLoged){
            login(userLoged)
        }else{
            navigate('/login')
        }
    }, [login, navigate])
// 699729
    return (
            <Box 
                sx={{
                    height: '100%', 
                    width:'100%', 
                    p: '0',  
                    display: 'flex', 
                    flexDirection: 'column'
                }}
            >
                <NavBar onMenuClick={handleOpenSideBar}/>
                <Grid 
                    container 
                    sx={{
                        height: 'calc(100vh - 84px)', 
                        mt: '64px', 
                        display: 'flex', 
                    }}
                >
                    <Grid 
                        item 
                        md={3} lg={2.5} xl={2}
                        sx={{
                            display: {xs: 'none', md: 'block'},
                            maxWidth: {xs: '210px', sm: '220px', md: '230px', lg: '260px'}
                        }}
                    >
                        <SideBar isOpen={isOpenSideBar} onClose={handleCloseSideBar}/>
                    </Grid>
                    <Grid item md={9} lg={9.5} xl={10} alignItems='center' justifyContent='center' sx={{ maxHeight: '100%', p: 2, width: {xs: '100%'}, maxWidth: '1400px'}}> 
                        <Outlet />
                    </Grid>
                </Grid>
                <Footer />
            </Box>
    )
}