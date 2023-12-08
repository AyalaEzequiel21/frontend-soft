import { Box, TextField } from '@mui/material'
import {AddCircle, FilterList, Search} from '@mui/icons-material';
import { ButtonToolbar } from './ButtonToolbar';

interface tableToolBarProps {

}

export const TableToolbar: React.FC<tableToolBarProps> = () => {
    return (
        <Box display='flex' alignItems='start' marginY={1} gap={1} height='50px' width='100%' justifyContent='start' p='0 10'>
            <ButtonToolbar label='Crear' icon={<AddCircle />} isContained={true}/>
            <ButtonToolbar label='Filtrar' icon={<FilterList />} isContained={false}/>

            {/* <Autocomplete
                freeSolo
                id='clients'
                disableClearable
                options={clientsList.map(client => client.nombre)}
                sx={{minWidth: '300px'}}
                renderInput={(params) => <TextField {...params} label='search' fullWidth/>}
            /> */}
            <TextField type='text ' size='small'/>
            <ButtonToolbar label='Buscar' icon={<Search />} isContained={true}/>
        </Box>
    )
}