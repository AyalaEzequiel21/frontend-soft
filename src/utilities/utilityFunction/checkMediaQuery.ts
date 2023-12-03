import {useMediaQuery} from '@mui/material'
import { useTheme } from '@mui/material/styles';


export const CheckMediumScreen = () => {
    const theme = useTheme()
    const isMediumScreen = useMediaQuery(theme.breakpoints.up('md')); 
    return isMediumScreen

}