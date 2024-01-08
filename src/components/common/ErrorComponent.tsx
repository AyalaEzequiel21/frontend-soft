import { Box, Typography } from "@mui/material";
import React from "react";
import ErrorIcon from '@mui/icons-material/Error';
import { AxiosError } from "axios";


interface errorComponentProps {
    error: AxiosError
}

export const ErrorComponent: React.FC<errorComponentProps> = ({error}) => {

    console.log(error);

    return (
        <Box m={3} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Typography variant="h2">Ha ocurrido un error</Typography>
            <ErrorIcon sx={{fontSize: '60px'}}/>
        </Box>
    )
}