import { OptionCard } from "../optionCard/OptionCard"
import { Grid, Typography } from '@mui/material'

const options = ['Crear pago', 'Modificar pago', 'Eliminar pago', 'Buscar pago']

export const PagosSection = () => {
    return (
        <>
            <Typography>Pagos</Typography>
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