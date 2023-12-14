import { Box, Typography, Divider } from "@mui/material"
import { TableResultLayout } from "../tableResultLayout/TableResultsLayout"
import { TableToolbar } from "../tableToolbar/TableTollbar"
import { TableHeadItemType } from "@/utilities/types/TableHeadItemType"
import { TableDataRowType } from "@/utilities/types/TableDataRowType"

interface resultsSectionLayout {
    title: string,
    headItems: TableHeadItemType[],
    dataRows: TableDataRowType[]
}

export const ResultsSectionLayout: React.FC<resultsSectionLayout> = ({title, headItems, dataRows}) => {
    return (
        <Box 
            display='flex'
            flexDirection='column'
            alignItems='center'
            height='100%'
            width='100%'
            maxWidth='1300px'
        >
            <Typography variant="h2" textAlign='start' width='100%' m={.5}>
                {title}
            </Typography>
            <Divider sx={{maxWidth: '1100px'}}/>
            <TableToolbar />
            <Divider sx={{maxWidth: '1100px'}}/>
            <TableResultLayout itemsHead={headItems} dataRows={dataRows}/>
        </Box>
    )
}