import { CheckMediumScreen } from "@/utilities/utilityFunction/checkMediaQuery"
import { Button, Typography } from "@mui/material"

interface buttonToolbarProps {
    label: string|undefined,
    icon: React.ReactNode,
    isContained: boolean
}

export const ButtonToolbar: React.FC<buttonToolbarProps> = ({label, icon, isContained}) => {
    const isMediumSize = CheckMediumScreen()

    return (
        <Button
            variant={isContained ? 'contained' : 'outlined'}
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '41.64px'}}
        >
            {isMediumSize && label !== undefined ? <>{icon} <Typography sx={{ml: 1}}>{label}</Typography> </> : icon}
        </Button>
    )
}