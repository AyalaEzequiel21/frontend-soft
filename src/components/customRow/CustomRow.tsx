import {  TableRow, IconButton, Button, useTheme } from "@mui/material"
import { DeleteForever, Create} from '@mui/icons-material'
import { ClientType } from '@/data/clientsList'
import { CheckMediumScreen } from '@/utilities/utilityFunction/checkMediaQuery'
import { TableCellBody } from '../tableCellBody/TableCellBody'

interface customRowProps{
    client: ClientType
}

export const CustomRow: React.FC<customRowProps> = ({client}) => {

    const isMediumSize = CheckMediumScreen()
    const {palette} = useTheme()

    return (
        
            <TableRow key={client.id}>
                <TableCellBody>{client.category}</TableCellBody>
                <TableCellBody><Button fullWidth variant="outlined" sx={{p: 1, m: '0', textAlign: 'start', fontWeight: 500}}>{client.nombre}</Button></TableCellBody>
                <TableCellBody>$ {client.balance}</TableCellBody>
                {isMediumSize && <TableCellBody>{client.telefono}</TableCellBody>}
                {isMediumSize && <TableCellBody><IconButton><Create /></IconButton><IconButton sx={{color: palette.error.main}}><DeleteForever /></IconButton></TableCellBody>}
            </TableRow>
            
    )
}