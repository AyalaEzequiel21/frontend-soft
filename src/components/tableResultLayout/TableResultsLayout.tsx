import { Paper, Table, TableContainer, TableHead, TableRow, TableBody, useTheme, IconButton } from "@mui/material"
import { CheckLargeScreen, CheckMediumScreen, CheckSmallScreen } from "@/utilities/utilityFunction/checkMediaQuery"
import { TableHeadItemType } from "@/utilities/types/TableHeadItemType"
import { CustomTableCell } from "../customTableCell/CustomTableCell"
import { TableDataRowType } from "@/utilities/types/TableDataRowType"
import { DeleteForever, Create} from '@mui/icons-material'

// import { CustomRow } from "../customRow/CustomRow"


interface tableResultLayoutProps {
    itemsHead: TableHeadItemType[],
    dataRows:  TableDataRowType[]
}

export const TableResultLayout: React.FC<tableResultLayoutProps> = ({itemsHead, dataRows}) => {

    const {palette} = useTheme()

    const selectSize = (starting: string) => {
        switch (starting) {
            case 'small': 
                return CheckSmallScreen()
            case 'medium': 
                return CheckMediumScreen()
            case 'large':
                return CheckLargeScreen()
            default :
                return true
        }
    }

    return (
        <TableContainer component={Paper} 
            sx={{mt: 1, maxWidth: '1300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '0.5em'}}
        > 
            <Table>
                <TableHead sx={{backgroundColor: palette.primary.light}}>
                    <TableRow>
                        {itemsHead.map(itemHead => 
                            selectSize(itemHead.starting) && 
                                <CustomTableCell isHead={true} colSpan={itemHead.colSpan}>
                                    {itemHead.label}
                                </CustomTableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataRows.map(row => (
                        <TableRow key={row.id}>
                            {itemsHead.map(item => (
                                selectSize(item.starting) && (
                                <CustomTableCell isHead={false} colSpan={1}>
                                    {item.key !== undefined && row[item.key] }
                                </CustomTableCell>
                                )
                            ))}
                            <CustomTableCell colSpan={1} isHead={false}><IconButton sx={{color: palette.primary.light, p: 0}}><Create /></IconButton></CustomTableCell>
                            <CustomTableCell colSpan={1} isHead={false}><IconButton sx={{color: palette.primary.light, '&:hover': {color: palette.error.main}}}><DeleteForever /></IconButton></CustomTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}