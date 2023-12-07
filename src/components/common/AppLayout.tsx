import { Box, Grid } from '@mui/material'
import { useState } from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'



export const AppLayout: React.FC<object> = () => {

    const [isOpenSideBar, setIsOpenSideBar] = useState(false)

    const handleOpenSideBar = () => {
        setIsOpenSideBar(true)
    }

    const handleCloseSideBar = () => {
        setIsOpenSideBar(false)
    }

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
                    md={2.7} 
                    lg={2} 
                    sx={{
                        display: {xs: 'none', md: 'block'}
                    }}
                >
                    <SideBar isOpen={isOpenSideBar} onClose={handleCloseSideBar}/>
                </Grid>
                <Grid container md={9.3} lg={10} alignItems='center' justifyContent='center' sx={{ maxHeight: '100%', p: 2 }}> 
                    <Outlet />
                 </Grid>
            </Grid>
            <Footer />
        </Box>
    )
}