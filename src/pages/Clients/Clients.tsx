import { CustomTable } from "@/components/customTable/CustomTable"
import { TableToolbar } from "@/components/tableToolbar/TableTollbar"
import { Box, Typography, Divider } from "@mui/material"

export const Clients = () => {
    return(
        <Box display='flex' flexDirection='column'  height='100%' width='100%'>
            <Typography variant="h4">Clientes</Typography>
            <Divider sx={{maxWidth: '1100px'}}/>
            <TableToolbar />    
            <Divider sx={{maxWidth: '1100px'}}/>
            <CustomTable />
        </Box>
    )
}