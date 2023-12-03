import { useTheme } from '@mui/material'
import {Box} from '@mui/material'

export const Footer: React.FC<object> = () => {
    const {palette} = useTheme()

    return (
        <Box
            component={'footer'}
            sx={{
                height: '20px',
                width: '100%',
                mt: 'auto',
                bgcolor: palette.primary.main
            }}
        >

        </Box>
    )
}