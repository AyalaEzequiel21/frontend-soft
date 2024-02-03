import { Box, TextField } from '@mui/material'
import {AddCircle, FilterList, Search} from '@mui/icons-material';
import { ButtonToolbar } from './ButtonToolbar';
import { ERole } from '@/enums/ERole';
import { UseAuth } from '@/utilities/hooks/UseAuth';

interface tableToolBarProps {
    toolbarRoles: ERole[],
    resultsLength: number,
    onOpenModal: ()=> void
}

export const TableToolbar: React.FC<tableToolBarProps> = ({toolbarRoles, resultsLength, onOpenModal}) => {
    
    const {userLoged} = UseAuth()
    const disabled = toolbarRoles.includes(userLoged?.role as ERole)
    const disabledSearch = resultsLength === 0
    return (
        <Box display='flex' alignItems='start' marginY={1} gap={1} height='50px' width='100%' justifyContent='start' p='0 10'>
            <ButtonToolbar label='Crear' onClick={onOpenModal} icon={<AddCircle />} isContained={true} isDisabled={!disabled}/>
            <ButtonToolbar label='Filtrar' onClick={onOpenModal} icon={<FilterList />} isContained={false} isDisabled={disabledSearch}/>
            <TextField type='text ' size='small'  placeholder='Buscar por nombre'/>
            <ButtonToolbar label={undefined} onClick={()=>{}} icon={<Search />} isContained={true} isDisabled={disabledSearch}/>
        </Box>
    )
}   
{/* <Autocomplete
                freeSolo
                id='clients'
                disableClearable
                options={clientsList.map(client => client.nombre)}
                sx={{minWidth: '300px'}}
                renderInput={(params) => <TextField {...params} label='search' fullWidth/>}
            /> */}