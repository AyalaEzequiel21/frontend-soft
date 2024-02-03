import { Box, Modal, useTheme } from "@mui/material"

interface modalWrapperProps {
    children: React.ReactNode
    isOpen: boolean
    onClose: ()=> void
}

export const ModalWrapper: React.FC<modalWrapperProps> = ({children, isOpen, onClose}) => {

    const {palette} = useTheme()
    return (
        <Modal open={isOpen} onClose={onClose} sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Box
                sx={{
                    backgroundColor: palette.background.default,
                    borderRadius: '5%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '25rem',
                    minWidth: '35rem'
                }}
            >
                {children}
            </Box>
        </Modal>
    )
}