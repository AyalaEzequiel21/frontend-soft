import { TableCell } from "@mui/material"
import React from "react"

interface tableCellProps {
    children: React.ReactNode
}

export const TableCellBody: React.FC<tableCellProps> = ({children}) => {
    return <TableCell 
                variant="head"
                size="medium"
            >{children}</TableCell>
}