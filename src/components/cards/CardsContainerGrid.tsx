import { Grid, Typography } from "@mui/material"
import { CardLayout } from "../common/CardLayout"


interface CardsContainerGridProps {}

export const CardsContainerGrid: React.FC<CardsContainerGridProps> = () => {
    
    return (
        <Grid container spacing={2} height={'100%'}>
            <Grid item xs={12} md={4}>
                <CardLayout>
                    <Typography>info</Typography>
                </CardLayout>
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid container spacing={2} height="30%">
                    <Grid item xs={4} height="90%">
                        <CardLayout>...</CardLayout>
                    </Grid>
                    <Grid item xs={4} height="90%">
                        <CardLayout>...</CardLayout>
                    </Grid>
                    <Grid item xs={4} height="90%">
                        <CardLayout>...</CardLayout>
                    </Grid>
                </Grid>
                <Grid item xs={12} height="70%">
                    <CardLayout>...</CardLayout>
                </Grid>
            </Grid>
        </Grid>
    )
}