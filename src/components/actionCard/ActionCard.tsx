import { Button, Divider, Card, CardContent, Typography, useTheme} from "@mui/material"

interface actionCardProps {
    label: string,
    iconAction: React.ReactNode,
    iconSection: React.ReactNode,
}

export const ActionCard: React.FC<actionCardProps> = ({label, iconAction, iconSection}) => {

    const { palette } = useTheme()

    return (
        <Card sx={{
            maxWidth: '210px',
            height: '220px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // m: 10, 
            backgroundImage: `linear-gradient(to bottom, ${palette.primary.light}, ${palette.secondary.dark})`,
            border: `2px solid ${palette.secondary.dark}`, 
            borderRadius: '0.5em',
            color: palette.info.main,
            '&:hover': {scale: '1.02', transition: 'ease 0.3s'},
        }}
        elevation={10}>
            <Button>
                <CardContent sx={{
                    backgroundImage: `linear-gradient(to bottom, ${palette.secondary.dark}, ${palette.secondary.main})`,
                    color: palette.info.dark, borderRadius: '0.5em', 
                    border: `1px solid ${palette.primary.main}`, 
                    p: 2,
                    minWidth: '186px',
                    '&:hover': {color: palette.info.main, 
                    transition: 'ease 0.2s'}
                }}>
                    <Typography textAlign='end'>{iconAction}</Typography>
                    <Divider sx={{m: '10px 0', backgroundColor: palette.info.main}}/>
                    <Typography variant="h3" textAlign='center'>{label}</Typography>
                    <Divider sx={{m: '10px 0', backgroundColor: palette.info.main}}/>
                    <Typography  textAlign='end'>{iconSection}</Typography>
                </CardContent>
            </Button>
        </Card>
    )
}