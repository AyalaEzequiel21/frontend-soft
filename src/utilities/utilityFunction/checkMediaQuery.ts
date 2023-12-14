import {useMediaQuery} from '@mui/material'
import { useTheme } from '@mui/material/styles';

export const CheckLargeScreen = () => {
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); 
    return isLargeScreen

}

export const CheckMediumScreen = () => {
    const theme = useTheme()
    const isMediumScreen = useMediaQuery(theme.breakpoints.up('md')); 
    return isMediumScreen

}

export const CheckSmallScreen = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm')); 
    return isSmallScreen

}

export const sizePitcher = (startingVisible: string) => {
    switch (startingVisible) {
        case 'small': 
            return CheckSmallScreen()
        case 'medium': 
            return CheckMediumScreen()
        case 'large':
            return CheckLargeScreen()
        default :
            return true
    }
}