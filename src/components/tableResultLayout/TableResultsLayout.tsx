import { Paper, Table, TableContainer, TableHead, TableRow, TableBody } from "@mui/material"
import { sizePitcher } from "@/utilities/utilityFunction/checkMediaQuery"
import { CustomTableCell } from "../customTableCell/CustomTableCell"
import { CustomRowBody } from "../customRowBody/CustomRowBody"
import { useTheme } from "@mui/material/styles"
import { TableHeadItemType } from "@/utilities/types/TableHeadItemType"
import { DataItemType } from "@/utilities/types/DataItemType"

interface tableResultLayoutProps<T  extends DataItemType> {
    itemsHead: TableHeadItemType[],
    dataRows:  T[]
}

export const TableResultLayout = <T  extends DataItemType>({itemsHead, dataRows}: tableResultLayoutProps<T>): JSX.Element => {

    const {palette} = useTheme()

    return (
        <TableContainer component={Paper} 
            sx={{mt: 1, maxWidth: '1300px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '0.5em'}}
        > 
            <Table stickyHeader={true}>
                <TableHead sx={{backgroundColor: palette.primary.light}}>
                    <TableRow>
                        {itemsHead.map((itemHead, index) => 
                            sizePitcher(itemHead.starting) && 
                                <CustomTableCell isHead={true} colSpan={itemHead.colSpan} key={index}>
                                    {itemHead.label}
                                </CustomTableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataRows.map((row, index) => (
                        <CustomRowBody<T> itemsHead={itemsHead} data={row} key={index}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}