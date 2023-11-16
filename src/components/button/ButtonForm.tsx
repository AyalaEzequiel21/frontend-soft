import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles';
 
interface buttonFormProps {
    children: React.ReactNode
}

export const ButtonForm: React.FC<buttonFormProps> = ({children}) => {
    const theme = useTheme()

    return (
        <Button
            type='submit'
            style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.secondary,
                margin: "0 auto"
            }}
        >
            {children}
        </Button>
    )
}