import { CheckMediumScreen } from "@/utilities/utilityFunction/checkMediaQuery"
import { Button } from "@mui/material"

interface buttonToolbarProps {
    label: string,
    icon: React.ReactNode
}

export const ButtonToolbar: React.FC<buttonToolbarProps> = ({label, icon}) => {
    const isMediumSize = CheckMediumScreen()

    return (
        <Button
        
        >
        {isMediumSize ? (icon + label) : icon}
        </Button>
    )
}