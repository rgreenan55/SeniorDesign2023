import React from 'react';
import { TextField } from '@mui/material';

const FormTextField = ({ name, ...props }) => {
    const label = name.replace(/([A-Z])/g, " $1");

    return (
        <TextField
            size='small'
            type='text'
            name={name}
            label={label.charAt(0).toUpperCase() + label.slice(1)}
            InputLabelProps={{ shrink: true }}
            {...props}
        />
    )
}

export default FormTextField;