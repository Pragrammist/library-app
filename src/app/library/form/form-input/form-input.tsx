import { Stack, TextField, Typography, useTheme } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";

export interface FormInputProps {
    label: string,
    placeholder : string,
    type?: HTMLInputTypeAttribute,
    isHideInputLabel?: boolean
}

export default function FormInput({label, placeholder, type, isHideInputLabel } : FormInputProps){
    const theme = useTheme();
    const defaultMuiTextField = theme.components?.MuiTextField?.defaultProps;
    return <Stack marginBottom={3}>
        <Typography variant="h3" marginBottom={1}>{label}</Typography>
        
        <TextField
            {...defaultMuiTextField}
            placeholder={placeholder}
            type={type}
            inputProps={{
                ...defaultMuiTextField?.inputProps,
                sx:{
                    ...defaultMuiTextField?.inputProps?.sx,
                    width: "100%"
                }
                }
            }
            style={{
                ...defaultMuiTextField?.style,
                marginRight: theme.spacing(2)
            }}
            
        />
    </Stack>
}