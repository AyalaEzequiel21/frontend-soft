import { Box, Typography, Divider } from "@mui/material"
import { TableResultLayout } from "../tableResultLayout/TableResultsLayout"
import { TableToolbar } from "../tableToolbar/TableTollbar"
import { TableHeadItemType } from "@/utilities/types/TableHeadItemType"
import { DataItemType } from "@/utilities/types/DataItemType"
import { NotFoundResults } from "./NotFoundResults"
import { PermittedRolesAction } from "@/utilities/types/PermittedRolesAction"
import { useState } from "react"
import { ModalWrapper } from "./ModalWrapper"
    
interface resultsSectionLayout<T  extends DataItemType> {
    title: string,
    headItems: TableHeadItemType[],
    dataResults: T[], 
    permittedRoles: PermittedRolesAction,
}

export const ResultsSectionLayout = <T extends DataItemType>({title, headItems, dataResults, permittedRoles} : resultsSectionLayout<T>): JSX.Element => {
    const [openModal, setOpenModal] = useState(false)

    const onToogle = () => {
        setOpenModal(!openModal)
    }

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
            <TableToolbar onOpenModal={onToogle} toolbarRoles={permittedRoles?.toolbarRoles} resultsLength={dataResults.length}/>
            <Divider sx={{maxWidth: '1100px'}}/>
            {dataResults.length === 0 ?
                <NotFoundResults/>
            :
                <TableResultLayout<T> openModal={onToogle} itemsHead={headItems} dataRows={dataResults} rowRoles={permittedRoles.rowRoles}/>
            }
            <ModalWrapper isOpen={openModal} onClose={onToogle}>
                <Typography>Modal</Typography>
            </ModalWrapper>
        </Box>
    )
}