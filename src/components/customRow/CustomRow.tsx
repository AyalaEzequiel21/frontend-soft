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
                {isMediumSize && <TableCellBody isFlex={false}>{client.category}</TableCellBody>}
                <TableCellBody isFlex={false}><Button fullWidth variant="outlined" sx={{p: 1, m: '0', textAlign: 'center', fontWeight: 500, maxHeight: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{client.nombre}</Button></TableCellBody>
                <TableCellBody isFlex={false}>$ {client.balance}</TableCellBody>
                {isMediumSize && <TableCellBody isFlex={false}>{client.telefono}</TableCellBody>}
                <TableCellBody isFlex={false}><IconButton sx={{color: palette.primary.light, p: 0}}><Create /></IconButton></TableCellBody>
                <TableCellBody isFlex={false}><IconButton sx={{color: palette.primary.light, '&:hover': {color: palette.error.main}}}><DeleteForever /></IconButton></TableCellBody>
            </TableRow>
            
    )
}

// overflow: 'hidden',  // Oculta el contenido que excede el tamaño
    //   textOverflow: 'ellipsis',  // Agrega puntos suspensivos (...) al final del texto truncado
    //   whiteSpace: 'nowrap'  // Evita el salto de línea y trunca el texto a una línea