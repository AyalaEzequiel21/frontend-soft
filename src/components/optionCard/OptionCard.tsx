import { Card, CardContent, Typography } from '@mui/material'

interface optionCardProps {
    title: string
}

export const OptionCard: React.FC<optionCardProps> = ({title}) => {
    return (
        <Card sx={{width: '200px', backgroundColor: '#6c757d'}} variant='outlined'>  
            <CardContent>
                <Typography color={'#f5f5f5'}>{title}</Typography>
            </CardContent>
        </Card>
    )
}