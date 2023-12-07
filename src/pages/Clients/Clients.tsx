import { CustomTable } from "@/components/customTable/CustomTable"
import { TableToolbar } from "@/components/tableToolbar/TableTollbar"
import { Box, Typography } from "@mui/material"

export const Clients = () => {
    return(
        <Box display='flex' flexDirection='column'  height='100%' width='100%' m={1}>
            <Typography variant="h4">Clientes</Typography>
            <TableToolbar />    
            <CustomTable />
        </Box>
    )
}