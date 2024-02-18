import { Card, useTheme } from "@mui/material"


interface cardLayoutProps {
    children: React.ReactNode,
}

export const CardLayout: React.FC<cardLayoutProps> = ({children}) => {

    const {palette} = useTheme()
   
    return (
        <Card
            sx={{
                borderRadius: '20px',
                background: `linear-gradient(to right, ${palette.primary.main}, ${palette.primary.dark})`,                
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                color: palette.info.main,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                justifyContent: 'center',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.02)',
                    background: `linear-gradient(to right, ${palette.primary.dark}, ${palette.primary.main})`
                  }
            }}
        >
            {children}
        </Card>
    )
}