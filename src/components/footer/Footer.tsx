import { Box } from "@mui/material"
import { useTheme } from '@mui/material/styles';

interface footerProps {}

export const Footer: React.FC<footerProps> = () => {
    const theme = useTheme()
    return(
        <Box 
        sx={{
            height: 50,
            backgroundColor: theme.palette.primary.main,
            zIndex: 100
        }}
        component={"footer"}
        >
        </Box>
    )
}