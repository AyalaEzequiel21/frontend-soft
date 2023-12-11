import {  TableRow, IconButton, useTheme } from "@mui/material"
import { DeleteForever, Create} from '@mui/icons-material'
import { TableHeadItemType } from "@/utilities/types/TableHeadItemType"
import { TableDataRowType } from "@/utilities/types/TableDataRowType"
import { CustomTableCell } from "../customTableCell/CustomTableCell"

interface customRowProps{
    client: TableDataRowType,
    itemsHead: TableHeadItemType[]
}

export const CustomRow: React.FC<customRowProps> = ({client}) => {

    const {palette} = useTheme()

    return (
        
            <TableRow key={client.id}>
                <CustomTableCell colSpan={1} isHead={false}><IconButton sx={{color: palette.primary.light, p: 0}}><Create /></IconButton></CustomTableCell>
                <CustomTableCell colSpan={1} isHead={false}><IconButton sx={{color: palette.primary.light, '&:hover': {color: palette.error.main}}}><DeleteForever /></IconButton></CustomTableCell>
            </TableRow>
            
    )
}