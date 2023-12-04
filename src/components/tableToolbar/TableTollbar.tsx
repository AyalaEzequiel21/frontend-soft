import { Box, Button, Autocomplete, TextField } from '@mui/material'
import {AddCircle, FilterList} from '@mui/icons-material';
import { clientsList } from '@/data/clientsList';

interface tableToolBarProps {

}

export const TableToolbar: React.FC<tableToolBarProps> = () => {
    return (
        <Box display='flex' alignItems='center' marginY={1} gap={1}>
            <Button variant='contained'><AddCircle sx={{marginRight: 1}}/> Agregar</Button>
            <Button variant='outlined'><FilterList sx={{marginRight: 1}}/> Filtrar</Button>
            <Autocomplete
                freeSolo
                id='clients'
                disableClearable
                options={clientsList.map(client => client.nombre)}
                sx={{minWidth: '300px'}}
                renderInput={(params) => <TextField {...params} label='search' fullWidth/>}
            />
        </Box>
    )
}