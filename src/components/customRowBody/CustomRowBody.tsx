import {  TableRow, IconButton, useTheme, Button } from "@mui/material"
import { DeleteForever, Create} from '@mui/icons-material'
import { TableHeadItemType } from "@/utilities/types/TableHeadItemType"
import { CustomTableCell } from "../customTableCell/CustomTableCell"
import { sizePitcher } from "@/utilities/utilityFunction/checkMediaQuery"
import { TableDataRowType } from "@/utilities/types/TableDataRowType"

// interface tableRowWithId<T>{
//   _id: string
// }

interface customRowProps<T extends TableDataRowType> {
    data: T,
    itemsHead: TableHeadItemType[]
}

export const CustomRowBody = <T extends TableDataRowType>({data, itemsHead}: customRowProps<T>): JSX.Element => {

    const {palette} = useTheme()

    const getTableCell = (itemHead: TableHeadItemType, data: T) => {
      const {key, isPrincipal, starting} = itemHead

      if(key !== undefined && data[key] !== undefined){
        const cellContent = isPrincipal ? (
          <CustomTableCell colSpan={1} isHead={false}>
            <Button variant="outlined" fullWidth sx={{p: 1, fontWeight: 'bold', '&:hover': {border: `1.5px solid ${palette.secondary.light}`, transition: 'ease-in 0.2s'}}}>{data[key]}</Button>
          </CustomTableCell>
        ) : typeof data[key] === 'boolean' ? (
          <CustomTableCell colSpan={1} isHead={false}>
          {data[key] ? 'si' : 'no'}
          </CustomTableCell>
        ) : (
          <CustomTableCell colSpan={1} isHead={false}>
          {data[key]}
          </CustomTableCell>
        )

        return (sizePitcher(starting) && cellContent)
      }
        return null
    }

    return (
            <TableRow key={data._id}>
                {itemsHead.map(item => getTableCell(item, data))}
                <CustomTableCell colSpan={1} isHead={false}><IconButton sx={{color: palette.primary.light, p: 0}}><Create /></IconButton></CustomTableCell>
                <CustomTableCell colSpan={1} isHead={false}><IconButton sx={{color: palette.primary.light, '&:hover': {color: palette.error.main}}}><DeleteForever /></IconButton></CustomTableCell>
            </TableRow>
            
    )
}