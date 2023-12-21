import { Paper, Table, TableContainer, TableHead, TableRow, TableBody, useTheme } from "@mui/material"
import { sizePitcher } from "@/utilities/utilityFunction/checkMediaQuery"
import { TableHeadItemType } from "@/utilities/types/TableHeadItemType"
import { CustomTableCell } from "../customTableCell/CustomTableCell"
import { TableDataRowType } from "@/utilities/types/TableDataRowType"
import { CustomRowBody } from "../customRowBody/CustomRowBody"

interface tableResultLayoutProps<T extends TableDataRowType> {
    itemsHead: TableHeadItemType[],
    dataRows:  T[]
}

export const TableResultLayout = <T extends TableDataRowType>({itemsHead, dataRows}: tableResultLayoutProps<T>): JSX.Element => {

    const {palette} = useTheme()

    return (
        <TableContainer component={Paper} 
            sx={{mt: 1, maxWidth: '1300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '0.5em'}}
        > 
            <Table stickyHeader={true}>
                <TableHead sx={{backgroundColor: palette.primary.light}}>
                    <TableRow>
                        {itemsHead.map(itemHead => 
                            sizePitcher(itemHead.starting) && 
                                <CustomTableCell isHead={true} colSpan={itemHead.colSpan}>
                                    {itemHead.label}
                                </CustomTableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataRows.map(row => (
                        <CustomRowBody itemsHead={itemsHead} data={row}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}