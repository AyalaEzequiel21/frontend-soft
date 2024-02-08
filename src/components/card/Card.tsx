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
                borderRadius: '20%',
                backgroundColor: palette.secondary.light,
                height: '10rem',
                width: '15rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography variant="h6">{subMessage}</Typography>
            <Typography variant="h2">{principalMessage}</Typography>
        </Box>
    )
}