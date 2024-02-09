import { DeleteForever } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import React from "react"

interface detailsLayoutProps{
    children: React.ReactNode
    section: string,
    keyWord: string
}

export const DetailsLayout: React.FC<detailsLayoutProps> = ({children, section, keyWord}) => {
    
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
                width: '90%',
                maxWidth:'800px'
            }}
            >
                <Typography variant="h3">{keyWord}</Typography>
                <IconButton sx={{p: 0}}><DeleteForever color="error" fontSize="small"/></IconButton>
            </Box>
            {children}
        </Box>
    )
}
