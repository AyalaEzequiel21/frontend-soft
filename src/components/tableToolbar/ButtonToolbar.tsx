import { CheckMediumScreen } from "@/utilities/utilityFunction/checkMediaQuery"
import { Button, Typography } from "@mui/material"

interface buttonToolbarProps {
    label: string|undefined,
    icon: React.ReactNode,
    isContained: boolean, 
    isDisabled: boolean,
    onClick: ()=> void
}

export const ButtonToolbar: React.FC<buttonToolbarProps> = ({label, icon, isContained, isDisabled, onClick}) => {
    const isMediumSize = CheckMediumScreen()

    return (
        <Button
            variant={isContained ? 'contained' : 'outlined'}
            onClick={onClick}
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '41.64px'}}
            disabled={isDisabled}
        >
            {isMediumSize && label !== undefined ? <>{icon} <Typography sx={{ml: 1}}>{label}</Typography> </> : icon}
        </Button>
    )
}