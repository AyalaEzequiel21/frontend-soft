import { Box, Typography } from "@mui/material"
import ReportIcon from '@mui/icons-material/Report';

interface notAuthorizatedProps {}

export const NotAuthorizated: React.FC<notAuthorizatedProps> = () => {
    
    return(
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mt={5}
        >
            <Typography variant="h2" textAlign='center'>No tienes autorizacion para acceder.</Typography>
            <ReportIcon fontSize="large"/>
        </Box>
    )
}