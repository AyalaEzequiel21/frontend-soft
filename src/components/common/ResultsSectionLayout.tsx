import { Box, Typography, Divider } from "@mui/material"
import { TableResultLayout } from "../tableResultLayout/TableResultsLayout"
import { TableToolbar } from "../tableToolbar/TableTollbar"
import { TableHeadItemType } from "@/utilities/types/TableHeadItemType"
import { DataItemType } from "@/utilities/types/DataItemType"
import { NotFoundResults } from "./NotFoundResults"
    
interface resultsSectionLayout<T  extends DataItemType> {
    title: string,
    headItems: TableHeadItemType[],
    dataResults: T[]
}

export const ResultsSectionLayout = <T extends DataItemType>({title, headItems, dataResults} : resultsSectionLayout<T>): JSX.Element => {
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
            {dataResults.length === 0 ?
                <NotFoundResults/>
            :
                <TableResultLayout<T> itemsHead={headItems} dataRows={dataResults}/>
            }
        </Box>
    )
}