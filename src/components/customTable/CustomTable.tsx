import { Paper, Table, TableContainer, TableHead, TableRow, TableBody,  useTheme } from "@mui/material"
import { CheckMediumScreen } from "@/utilities/utilityFunction/checkMediaQuery"
import { clientsList } from "@/data/clientsList"
import { CustomRow } from "../customRow/CustomRow"
import { TableCellHead } from "../tableCellHead/TableCellHead"

interface customTableProps {}

export const CustomTable: React.FC<customTableProps> = () => {

const isMediumSize = CheckMediumScreen()
const {palette} = useTheme()

    return (
        <TableContainer component={Paper} sx={{mt: 1, maxWidth: '1100px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '0.5em'}}>
            <Table>
                <TableHead style={{backgroundColor: palette.grey[100]}}>
                    <TableRow>
                        {/* <TableCellHead> </TableCellHead> */}
                        <TableCellHead>Cat</TableCellHead>
                        <TableCellHead>Nombre</TableCellHead>
                        <TableCellHead>Balance</TableCellHead>
                        {isMediumSize && <TableCellHead>Teléfono</TableCellHead>}
                        {isMediumSize && <TableCellHead> </TableCellHead>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clientsList.map(client => (
                        <CustomRow client={client} key={client.id}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}