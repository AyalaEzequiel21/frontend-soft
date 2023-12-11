import { TableResultLayout } from "@/components/tableResultLayout/TableResultsLayout"
import { TableToolbar } from "@/components/tableToolbar/TableTollbar"
import { Box, Typography, Divider } from "@mui/material"
import { clientsList } from "@/data/clientsList"
import { ClientType } from "@/utilities/types/ClientType"

const itemsHead = [
    {
        label: 'Cat',
        colSpan: 1,
        starting: 'medium',
        key: 'category' as keyof ClientType
    },
    {
        label: 'Cliente',
        colSpan: 1,
        starting: '',
        key: 'nombre' as keyof ClientType
    },
    {
        label: 'Balance',
        colSpan: 1,
        starting: '',
        key: 'balance' as keyof ClientType
    },
    {
        label: 'Telefono',
        colSpan: 1,
        starting: 'small',
        key: 'telefono' as keyof ClientType
    },
    {
        label: 'Reparto',
        colSpan: 1,
        starting: 'large',
        key: 'in_delivery' as keyof ClientType
    },
    {
        label: '',
        colSpan: 3,
        starting: '',
        key: undefined
    }
]

export const Clients = () => {
    return(
        <Box display='flex' flexDirection='column'  height='100%' width='100%' alignItems='center' maxWidth='1300px'>
            <Typography variant="h2" textAlign='start' width='100%' m={.5}>Clientes</Typography>
            <Divider sx={{maxWidth: '1100px'}}/>
            <TableToolbar />    
            <Divider sx={{maxWidth: '1100px'}}/>
            <TableResultLayout itemsHead={itemsHead} dataRows={clientsList}/>
        </Box>
    )
}
