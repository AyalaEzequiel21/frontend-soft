import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Collapse, IconButton, useTheme } from "@mui/material"
import {KeyboardArrowUp, KeyboardArrowDown, DeleteForever, Create} from '@mui/icons-material'
import {useState} from 'react'
import { CheckMediumScreen } from "@/utilities/utilityFunction/checkMediaQuery"

interface customTableProps {}

const clientDemo = {
    id: '22202',
    name: 'John',
    phone: '12112123',
    balance: 25000,
    category: 'cat-1',
    in_delidvery: false,
    payments: ['123212', '123213'],
    sales: []
}

export const CustomTable: React.FC<customTableProps> = () => {

const [collapseOpen, setCollapseOpen] = useState(false);
const isMediumSize = CheckMediumScreen()
const {palette} = useTheme()

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead style={{backgroundColor: palette.grey[100]}}>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Id</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Balance</TableCell>
                        {isMediumSize && <TableCell>Teléfono</TableCell>}
                        {isMediumSize && <TableCell></TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={clientDemo.id}>
                        <TableCell>
                            <IconButton onClick={()=> setCollapseOpen(!collapseOpen)}>{collapseOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</IconButton>
                        </TableCell>
                        <TableCell>{clientDemo.id}</TableCell>
                        <TableCell>{clientDemo.name}</TableCell>
                        <TableCell>$ {clientDemo.balance}</TableCell>
                        {isMediumSize && <TableCell>{clientDemo.phone}</TableCell>}
                        {isMediumSize && <TableCell><IconButton><Create /></IconButton><IconButton><DeleteForever /></IconButton></TableCell>}
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} >
                            <Collapse in={collapseOpen} timeout='auto' unmountOnExit>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell>Categoria</TableCell>
                                            <TableCell>Reparto</TableCell>
                                            <TableCell>Pagos</TableCell>
                                            <TableCell>Ventas</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell>{clientDemo.category}</TableCell>
                                            <TableCell>{clientDemo.in_delidvery? 'Si': 'No'}</TableCell>
                                            <TableCell>{clientDemo.payments.length}</TableCell>
                                            <TableCell>{clientDemo.sales.length}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}