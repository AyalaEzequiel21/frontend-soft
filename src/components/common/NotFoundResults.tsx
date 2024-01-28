import { Box, Typography } from "@mui/material"
import SearchOffIcon from '@mui/icons-material/SearchOff';


interface notFoundsResultsProps {}

export const NotFoundResults: React.FC<notFoundsResultsProps> = () => {
    
    return(
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mt={5}
        >
            <Typography variant="h2" textAlign='center'>No se encontraron resultados</Typography>
            <SearchOffIcon fontSize="large"/>
        </Box>
    )
}