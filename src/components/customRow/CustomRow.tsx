import {  TableRow, IconButton, Button } from "@mui/material"
import { DeleteForever, Create} from '@mui/icons-material'
import { ClientType } from '@/data/clientsList'
import { CheckMediumScreen } from '@/utilities/utilityFunction/checkMediaQuery'
import { TableCellBody } from '../tableCellBody/TableCellBody'

interface customRowProps{
    client: ClientType
}

export const CustomRow: React.FC<customRowProps> = ({client}) => {

    const isMediumSize = CheckMediumScreen()

    return (
        
            <TableRow key={client.id}>
                <TableCellBody>{client.category}</TableCellBody>
                <Button><TableCellBody>{client.nombre}</TableCellBody></Button>
                <TableCellBody>$ {client.balance}</TableCellBody>
                {isMediumSize && <TableCellBody>{client.telefono}</TableCellBody>}
                {isMediumSize && <TableCellBody><IconButton><Create /></IconButton><IconButton sx={{'&:hover': {color: 'red'}}}><DeleteForever /></IconButton></TableCellBody>}
            </TableRow>
            
    )
}