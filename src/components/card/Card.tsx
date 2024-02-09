import { Box, Typography, useTheme } from "@mui/material"


interface cardProps {
    subMessage: string,
    principalMessage: string
}

export const Card: React.FC<cardProps> = ({subMessage, principalMessage}) => {

    const {palette} = useTheme()

    return (
        <Box
            sx={{
                borderRadius: '20px',
                background: `linear-gradient(to right, ${palette.primary.main}, ${palette.primary.dark})`,                
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                color: palette.info.main,
                height: '10rem',
                width: '15rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.04)',
                    background: `linear-gradient(to right, ${palette.primary.dark}, ${palette.primary.main})`
                  }
            }}
        >
            <Typography variant="h6">{subMessage}</Typography>
            <Typography variant="h2">{principalMessage}</Typography>
        </Box>
    )
}