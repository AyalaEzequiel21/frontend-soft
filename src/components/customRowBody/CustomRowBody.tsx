import {  TableRow, IconButton, useTheme, Button } from "@mui/material"
import { DeleteForever, Create} from '@mui/icons-material'
import { TableHeadItemType } from "@/utilities/types/TableHeadItemType"
import { CustomTableCell } from "../customTableCell/CustomTableCell"
import { ClientType } from "@/utilities/types/ClientType"
import { sizePitcher } from "@/utilities/utilityFunction/checkMediaQuery"
import { TableDataRowType } from "@/utilities/types/TableDataRowType"

interface customRowProps{
    client: TableDataRowType,
    itemsHead: TableHeadItemType[]
}

export const CustomRowBody: React.FC<customRowProps> = ({client, itemsHead}) => {

    const {palette} = useTheme()

    const getTableCell = (itemHead: TableHeadItemType, client: ClientType) => {
      const {key, isPrincipal, starting} = itemHead

      if(key !== undefined && client[key] !== undefined){
        const cellContent = isPrincipal ? (
          <CustomTableCell colSpan={1} isHead={false}>
            <Button variant="outlined" fullWidth sx={{p: 1, fontWeight: 'bold', '&:hover': {border: `1.5px solid ${palette.secondary.light}`, transition: 'ease-in 0.2s'}}}>{client[key]}</Button>
          </CustomTableCell>
        ) : typeof client[key] === 'boolean' ? (
          <CustomTableCell colSpan={1} isHead={false}>
          {client[key] ? 'si' : 'no'}
          </CustomTableCell>
        ) : (
          <CustomTableCell colSpan={1} isHead={false}>
          {client[key]}
          </CustomTableCell>
        )

        return (sizePitcher(starting) && cellContent)
      }
        return null
    }

    return (
            <TableRow key={client.id}>
                {itemsHead.map(item => getTableCell(item, client))}
                <CustomTableCell colSpan={1} isHead={false}><IconButton sx={{color: palette.primary.light, p: 0}}><Create /></IconButton></CustomTableCell>
                <CustomTableCell colSpan={1} isHead={false}><IconButton sx={{color: palette.primary.light, '&:hover': {color: palette.error.main}}}><DeleteForever /></IconButton></CustomTableCell>
            </TableRow>
            
    )
}