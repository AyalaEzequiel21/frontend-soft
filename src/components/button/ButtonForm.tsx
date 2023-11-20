import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles';
 
interface buttonFormProps {
    children: React.ReactNode
    mt: boolean,
    sizeXL: boolean
}

export const ButtonForm: React.FC<buttonFormProps> = ({children, mt, sizeXL}) => {
    const theme = useTheme()

    return (
        <Button
            type='submit'
            style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.secondary,
                margin: '0 auto',
                marginTop: mt? 20 : 0,
                width: sizeXL? '100%' : '150px',
                padding: "10px"
            }}
        >
            {children}
        </Button>
    )
}