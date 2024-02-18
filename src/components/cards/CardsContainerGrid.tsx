import { Grid, Typography } from "@mui/material"
import { CardLayout } from "../common/CardLayout"


interface CardsContainerGridProps {}

export const CardsContainerGrid: React.FC<CardsContainerGridProps> = () => {
    
    return (
        <Grid container spacing={1}
            sx={{
                height: '100%',
                maxWidth: {sm: '700px', md: '1300px'}
            }}
        >
            <Grid item xs={12} md={4} sx={{p:0}}>
                <CardLayout>
                    <Typography>info</Typography>
                </CardLayout>
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid container height="35%" justifyContent={'space-around'} alignItems={'center'}>
                    <Grid item xs={3.8} height="90%">
                        <CardLayout>...</CardLayout>
                    </Grid>
                    <Grid item xs={3.8} height="90%">
                        <CardLayout>...</CardLayout>
                    </Grid>
                    <Grid item xs={3.8} height="90%">
                        <CardLayout>...</CardLayout>
                    </Grid>
                </Grid>
                <Grid item xs={12} height="65%">
                    <CardLayout>...</CardLayout>
                </Grid>
            </Grid>
        </Grid>
    )
}