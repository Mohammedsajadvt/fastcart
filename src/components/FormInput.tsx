import type { TextFieldProps } from '@mui/material';
import { TextField } from '@mui/material';
import type { FC } from 'react';

type FormInputProps = TextFieldProps & {
  label: string;
  type: string;
};

const FormInput: FC<FormInputProps> = ({ label, type, ...rest }) => {
  return (
    <TextField
      fullWidth
      margin="dense"
      label={label}
      type={type}
      required
      variant="outlined"
      InputLabelProps={{
        sx: {
          color: '#A1A7C4',
          fontSize: '14px',
          transform: 'translate(14px, 10px) scale(1)',
          '&.Mui-focused': {
            color: '#5A607F',
            transform: 'translate(14px, -9px) scale(0.75)',
          },
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -9px) scale(0.75)',
          },
          '& .MuiInputLabel-asterisk': {
            display: 'none', 
          },
        },
      }}
      InputProps={{
        sx: {
          height: '40px',
          fontSize: '14px',
          padding: '0 14px',
          '& input': {
            padding: 0,
            height: '100%',
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
