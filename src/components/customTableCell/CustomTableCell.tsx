import { TableCell, useTheme } from "@mui/material"

interface customTableCellProps {
    children: React.ReactNode,
    isHead: boolean,
    colSpan: number
}

export const CustomTableCell: React.FC<customTableCellProps> = ({children, isHead, colSpan}) => {
    const {palette} = useTheme()

    return (
        <TableCell 
            variant={isHead ? 'head' : 'body'}
            align="center"
            size="medium"
            colSpan={colSpan}
            sx={{
                backgroundColor: isHead ? palette.primary.light : '',
                fontSize: '1.2rem',
                fontWeight: '500',
                color: isHead ? palette.info.main : palette.text.primary,
                p: {xs: '14px 7px', md: '16px 10px', lg: '16px'}
            }}
        >
            {children}
        </TableCell>
    )
}