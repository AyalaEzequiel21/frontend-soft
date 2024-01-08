import { TextField } from "@mui/material"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"

interface customInputProps<T extends FieldValues> {
    type: React.HTMLInputTypeAttribute,
    label: string,
    register: UseFormRegister<T>,
    value: Path<T>, 
    msgError: string,
    error?: boolean | undefined; 
    helperText?: string; 
}

export const CustomInput = <T extends FieldValues>({
    type, 
    label, 
    register, 
    value, 
    msgError,
    error,
    helperText
    } : customInputProps<T>
) => {

    return (
        <TextField
            fullWidth 
            type={type}
            autoComplete="current-password"
            label={label}
            color="secondary"
            {...register(value, {
                required: msgError
            })}
            error={error}
            helperText={helperText} 
            
        />
    )
}