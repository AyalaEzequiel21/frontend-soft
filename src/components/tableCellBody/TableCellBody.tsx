import { TableCell } from "@mui/material"
import React from "react"

interface tableCellProps {
    children: React.ReactNode,
    isFlex: boolean
}

export const TableCellBody: React.FC<tableCellProps> = ({children, isFlex}) => {
    return <TableCell 
                variant="head"
                align="center"
                size="medium"
                sx={{fontWeight: 600, display: isFlex ? 'flex' : '', p: {xs: '14px 7px', md: '16px'}}}
            >{children}</TableCell>
}