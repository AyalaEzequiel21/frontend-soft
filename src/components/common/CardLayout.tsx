// import { CheckSmallScreen } from "@/utilities/utilityFunction/checkMediaQuery"
import { Card, useTheme } from "@mui/material"


interface cardLayoutProps {
    children: React.ReactNode,
}

export const CardLayout: React.FC<cardLayoutProps> = ({children}) => {

    const {palette} = useTheme()
    // const isSmallScreen = !CheckSmallScreen()

    // const cardWidthSizes = {
    //     individual: '12rem',
    //     info: '15rem',
    //     list: '36rem'
    // }

    // const cardHeightSizes = {
    //     individual: '50%',
    //     info: '100%',
    //     list: '50%'
    // }

    // const getWidth = (cardType: CardType, isSmallScreen: boolean) => {
    //     if(isSmallScreen){
    //         return '90%'
    //     } else {
    //         return cardWidthSizes[cardType]
    //     }
    // }

    return (
        <Card
            sx={{
                borderRadius: '20px',
                background: `linear-gradient(to right, ${palette.primary.main}, ${palette.primary.dark})`,                
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                color: palette.info.main,
                // width: isSmallScreen ? '90%' : getWidth(variant, isSmallScreen),
                width: '100%',
                height: '100%',
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