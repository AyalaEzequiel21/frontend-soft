import { Button, Divider, Card, CardContent, Typography, useTheme, Modal, Box } from "@mui/material"
import { useState } from "react"

interface actionCardProps {
    label: string,
    iconAction: React.ReactNode,
    iconSection: React.ReactNode,
}

export const ActionCard: React.FC<actionCardProps> = ({label, iconAction, iconSection}) => {

    const { palette } = useTheme()
    const [modalOpen, setModalOpen] = useState(false);

    const handleCardClick = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    return (
        <>
            <Card 
                onClick={handleCardClick}
                sx={{
                width: '18rem',
                height: '16rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                m: 1, 
                backgroundImage: `linear-gradient(to bottom, ${palette.primary.light}, ${palette.secondary.dark})`,
                border: `2px solid ${palette.primary.main}`, 
                borderRadius: '0.5em',
                color: palette.info.main,
                '&:hover': {scale: '1.01', transition: 'ease 0.3s'},
                }}
                elevation={10}
            >
                <Button>
                    <CardContent sx={{
                        backgroundImage: `linear-gradient(to bottom, ${palette.secondary.dark}, ${palette.secondary.main})`,
                        color: palette.info.dark, borderRadius: '0.5em', 
                        border: `1px solid ${palette.primary.main}`, 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        p: 2,
                        height: '14rem',
                        width: '16rem',
                        '&:hover': {
                            transition: 'ease 0.2s',
                            backgroundImage: `linear-gradient(to bottom, ${palette.secondary.main}, ${palette.secondary.dark})`,
                            color: palette.info.main, 
                        }
                    }}>
                        <Typography textAlign='end'>{iconAction}</Typography>
                        <Divider sx={{m: '10px 0', backgroundColor: palette.info.main}}/>
                        <Typography variant="h4" textAlign='center'>{label}</Typography>
                        <Divider sx={{m: '10px 0', backgroundColor: palette.info.main}}/>
                        <Typography  textAlign='end'>{iconSection}</Typography>
                    </CardContent>
                </Button>
            </Card>

            <Modal 
                open={modalOpen} 
                onClose={handleCloseModal}
                sx={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <Box sx={{height: '25rem', width: '20rem', backgroundColor: palette.secondary.light}}>
                    <Typography variant="h3">FUTURO FORMULARIO</Typography>
                </Box>
            </Modal>
        </>
    )
}