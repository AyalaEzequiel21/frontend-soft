import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Collapse, IconButton, useTheme } from "@mui/material"
import {KeyboardArrowUp, KeyboardArrowDown, DeleteForever, Create} from '@mui/icons-material'
import {useState} from 'react'
import { CheckMediumScreen } from "@/utilities/utilityFunction/checkMediaQuery"
import { clientsList } from "@/data/clientsList"

interface customTableProps {}

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
                    {clientsList.map(client => (
                        <>
                            <TableRow key={client.id}>
                                <TableCell>
                                    <IconButton onClick={()=> setCollapseOpen(!collapseOpen)}>{collapseOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</IconButton>
                                </TableCell>
                                <TableCell>{client.id}</TableCell>
                                <TableCell>{client.nombre}</TableCell>
                                <TableCell>$ {client.balance}</TableCell>
                                {isMediumSize && <TableCell>{client.telefono}</TableCell>}
                                {isMediumSize && <TableCell><IconButton><Create /></IconButton><IconButton sx={{'&:hover': {color: 'red'}}}><DeleteForever /></IconButton></TableCell>}
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
                                                    <TableCell>{client.category}</TableCell>
                                                    <TableCell>{client.in_delivery? 'Si': 'No'}</TableCell>
                                                    <TableCell>{client.pagos.length}</TableCell>
                                                    <TableCell>{client.ventas.length}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        </>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}