import type { TextFieldProps } from '@mui/material';
import { TextField } from '@mui/material';
import type { FC } from 'react';

type FormInputProps = TextFieldProps & {
    label: string;
    type: String;
};

const FormInput: FC<FormInputProps> = ({ label, type, ...rest }) => {
    return (
        <TextField
            fullWidth
            margin="normal"
            label={label}
            type={type}
            required
            variant="outlined"
            InputLabelProps={{
                sx: {
                    color: '#A1A7C4',
                    '&.Mui-focused': {
                        color: '#5A607F',
                    },
                    
                },
            }}
            sx={{
                width: '350px',
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#D9E1EC',
                    },
                    '&:hover fieldset': {
                        borderColor: '#D9E1EC',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#5A607F',
                    },
                },
            }}
            {...rest}
        />
    );
};

export default FormInput;
