import { Box, Typography } from "@mui/material"
import React from "react"

interface detailsLayoutProps{
    children: React.ReactNode
    section: string,
}

export const DetailsLayout: React.FC<detailsLayoutProps> = ({children, section}) => {
    
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                maxWidth:'1300px'
            }}
        >
            <Typography variant="h4" textAlign={'start'} sx={{width:'100%'}}>{`Detalle de ${section}`}</Typography>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 1,
                width: '100%',
                maxWidth:'800px'
            }}
            >
            </Box>
            {children}
        </Box>
    )
}
