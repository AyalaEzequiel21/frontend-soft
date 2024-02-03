import {  TableRow, IconButton, Button } from "@mui/material"
import { Create} from '@mui/icons-material'
import { TableHeadItemType } from "@/utilities/types/TableHeadItemType"
import { CustomTableCell } from "../customTableCell/CustomTableCell"
import { sizePitcher } from "@/utilities/utilityFunction/checkMediaQuery"
import { useTheme } from "@mui/material/styles"
import { DataItemType } from "@/utilities/types/DataItemType"
import { ERole } from "@/enums/ERole"
import { UseAuth } from "@/utilities/hooks/UseAuth"
import { useNavigate } from "react-router-dom"

interface customRowProps<T extends DataItemType> {
    data: T,
    itemsHead: TableHeadItemType[],
    rowRoles: ERole[], 
    openModal: ()=> void, 
}

export const CustomRowBody = <T extends DataItemType>({data, itemsHead, rowRoles, openModal}: customRowProps<T>): JSX.Element => {

    const {palette} = useTheme()
    const {userLoged} = UseAuth()
    const navigate = useNavigate()
    const isDisabledButton = !rowRoles.includes(userLoged?.role as ERole)

    const getTableCell = (itemHead: TableHeadItemType, data: T) => {
      const {key, isPrincipal, starting} = itemHead

      if(key !== undefined && data[key] !== undefined){
        const cellContent = isPrincipal ? (
          <CustomTableCell colSpan={1} isHead={false} key={key}>
            <Button variant="outlined" onClick={()=> navigate(`${data._id}`)} fullWidth sx={{p: 1, fontWeight: 'bold', '&:hover': {border: `1.5px solid ${palette.secondary.light}`, transition: 'ease-in 0.2s'}}}>{data[key] as React.ReactNode}</Button>
          </CustomTableCell>
        ) : typeof data[key] === 'boolean' ? (
          <CustomTableCell colSpan={1} isHead={false} key={key}>
          {data[key] ? 'si' : 'no'}
          </CustomTableCell>
        ) : (
          <CustomTableCell colSpan={1} isHead={false} key={key}>
          {data[key] as React.ReactNode}
          </CustomTableCell>
        )

        return (sizePitcher(starting) && cellContent)
      }
        return null
    }

    return (
            <TableRow key={data._id}>
                {itemsHead.map(item => getTableCell(item, data))}
                <CustomTableCell colSpan={1} isHead={false}><IconButton onClick={openModal} key='modify' sx={{color: palette.primary.light, p: 0}} disabled={isDisabledButton}><Create /></IconButton></CustomTableCell>
                {/* <CustomTableCell colSpan={1} isHead={false}><IconButton key='delete' sx={{color: palette.primary.light, '&:hover': {color: palette.error.main}}} disabled={isDisabledButton}><DeleteForever /></IconButton></CustomTableCell> */}
            </TableRow>
            
    )
}