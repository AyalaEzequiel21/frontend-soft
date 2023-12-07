import { TableCell } from "@mui/material"
import React from "react"

interface tableCellProps {
    children: React.ReactNode
}

export const TableCellBody: React.FC<tableCellProps> = ({children}) => {
    return <TableCell 
                variant="head"
                align="center"
                size="medium"
                sx={{fontWeight: 600}}
            >{children}</TableCell>
}