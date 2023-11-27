import { Footer } from "@/components/common/Footer"
import { NavBar } from "@/components/common/NavBar"
import { SideBar } from "@/components/common/SideBar"
import {Grid, Box} from "@mui/material"
import { useState } from "react"

interface homeProps {
    // children: React.ReactNode
}

export const Home: React.FC<homeProps> = () => {

const [isOpen, setIsOpen] = useState(false)
const [sectionSelected, setSectionSelected] = useState('home')

const handleCloseMenu = () => {
    setIsOpen(false)
}

const handleOpenMenu = () => {
    setIsOpen(true);
}

    return (
        <Box sx={{height: '100%', p: '0',  display: 'flex', flexDirection: 'column'}}>
            <NavBar onMenuClick={handleOpenMenu}/>
            <Grid container sx={{height: 'calc(100% - 124px)', mt: '64px', display: 'flex', justifyContent: 'center'}}>
                <Grid item xs={2.5} md={3} sx={{display: {xs: 'none', md: 'block'}}}>
                    <SideBar isOpen={isOpen} onClose={handleCloseMenu} setSelected={setSectionSelected}/>
                </Grid>
                <Grid item xs={9.5} md={9} sx={{ overflow: 'auto' }}>
                    <h2 style={{color: 'black'}}>{sectionSelected}</h2>
                </Grid>
            </Grid>
            <Footer />
        </Box>
    )
}