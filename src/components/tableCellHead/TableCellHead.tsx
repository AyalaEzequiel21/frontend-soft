import { TableCell, useTheme } from "@mui/material"
import React from "react"

interface tableCellProps {
    children: React.ReactNode
}

export const TableCellHead: React.FC<tableCellProps> = ({children}) => {
const {palette} = useTheme()

    return <TableCell 
                variant="head"
                align="center"
                size="medium"
                sx={{
                    backgroundColor: palette.primary.light,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: palette.info.main
                }}
            >{children}</TableCell>
}