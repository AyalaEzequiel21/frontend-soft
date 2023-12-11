import { CheckMediumScreen } from "@/utilities/utilityFunction/checkMediaQuery"
import { Button, Typography } from "@mui/material"

interface buttonToolbarProps {
    label: string,
    icon: React.ReactNode,
    isContained: boolean
}

export const ButtonToolbar: React.FC<buttonToolbarProps> = ({label, icon, isContained}) => {
    const isMediumSize = CheckMediumScreen()

    return (
        <Button
            variant={isContained ? 'contained' : 'outlined'}
            sx={{display: 'flex', justifyContent: 'space-around', height: '41.64px'}}
        >
            {isMediumSize ? <>{icon} <Typography sx={{ml: 1}}>{label}</Typography> </> : icon}
        </Button>
    )
}