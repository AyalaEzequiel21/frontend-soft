import { Box, Typography, useTheme } from "@mui/material"


interface userAvatarProps {
    username: string,
}

const getFirstLetter = (username: string) => {
    const letter = username[0]
    return letter.toUpperCase()
}

export const UserAvatar: React.FC<userAvatarProps> = ({username}) => {
    const {palette} = useTheme()
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            sx={{
                bgcolor: palette.primary.main, 
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border:`1px solid ${palette.secondary.main}`,
                '&:hover': {
                    cursor: 'pointer',
                    color: palette.secondary.light
                }
            }}
        >
            <Typography
                sx={{fontSize: 25, fontWeight: 'bold'}}
            >
                {getFirstLetter(username)}
            </Typography>
        </Box>
    )
}