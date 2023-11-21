import { OptionCard } from "../optionCard/OptionCard"
import { Grid, Typography } from '@mui/material'

const options = ['Crear cliente', 'Modificar cliente', 'Eliminar cliente', 'Buscar cliente']

export const ClientesSection = () => {
    return (
        <>
            <Typography>Clientes</Typography>
            <Grid container spacing={2} sx={{marginTop:5}}>
                {options.map((option) => (
                    <Grid item key={option} xs={12} md={4}>
                        <OptionCard title={option}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}