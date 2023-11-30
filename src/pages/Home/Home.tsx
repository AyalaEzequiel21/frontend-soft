import { ActionCard } from "@/components/actionCard/ActionCard"
import { Footer } from "@/components/common/Footer"
import { NavBar } from "@/components/common/NavBar"
import { SectionLayout } from "@/components/common/SectionLayout"
import { SideBar } from "@/components/common/SideBar"
import { actionsClientsSection } from "@/data/actionsForSection"
import {Grid, Box, Button} from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface homeProps {
    // children: React.ReactNode
}

export const Home: React.FC<homeProps> = () => {

const [isOpen, setIsOpen] = useState(false)
const [sectionSelected, setSectionSelected] = useState('clientes')
const navigate = useNavigate()

const handleCloseMenu = () => {
    setIsOpen(false)
}

const handleOpenMenu = () => {
    setIsOpen(true);
}

    return (
        <Box sx={{height: '100%', p: '0',  display: 'flex', flexDirection: 'column'}}>
            <NavBar onMenuClick={handleOpenMenu}/>
            <Grid container sx={{height: 'calc(100% - 124px)', mt: '64px', display: 'flex', justifyContent: {xs: 'center', sm:'space-between'}}}>
                <Grid item sm={3.3} md={2.7} lg={2.5} sx={{display: {xs: 'none', sm: 'block'}}}>
                    <SideBar isOpen={isOpen} onClose={handleCloseMenu} setSelected={setSectionSelected}/>
                </Grid>
                <Grid container sm={7.7} md={8.5} lg={9} sx={{ overflow: 'auto', maxHeight: '100%' }}>
                    {/* <h2 style={{color: 'black'}}>{sectionSelected}</h2> */}
                    <SectionLayout sectionSelected={sectionSelected}/>
                    {/* <Button variant="contained" color="secondary" onClick={() => navigate('/login')}>Login</Button> */}
                </Grid>
            </Grid>
            <Footer />
        </Box>
    )
}