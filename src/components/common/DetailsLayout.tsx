import { Box, Typography } from "@mui/material"
import React from "react"

interface detailsLayoutProps{
    children: React.ReactNode
    title: string
}

export const DetailsLayout: React.FC<detailsLayoutProps> = ({children, title}) => {
    
    return (
        <Box
            sx={{
                border: '2px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%'
            }}
        >
            <Typography>{title}</Typography>
        </Box>
    )
}