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
                    justifyContent: {
                        xs: 'center', 
                        sm:'space-between'
                        }
                }}
            >
                <Grid 
                    item 
                    md={2.7} 
                    lg={2.5} 
                    sx={{
                        display: {xs: 'none', md: 'block'}
                    }}
                >
                    <SideBar isOpen={isOpenSideBar} onClose={handleCloseSideBar}/>
                </Grid>
                <Grid container md={8.5} lg={9} sx={{ maxHeight: '100%' }}> 
                    <Outlet />
                 </Grid>
            </Grid>
            <Footer />
        </Box>
    )
}