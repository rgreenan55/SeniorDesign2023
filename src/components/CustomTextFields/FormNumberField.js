import React from 'react';
import { TextField } from '@mui/material';

const FormNumberField = ({ name, ...props }) => {
    const label = name.replace(/([A-Z])/g, " $1");

    return (
        <TextField
            size='small'
            type='number'
            name={name}
            label={label.charAt(0).toUpperCase() + label.slice(1)}
            defaultValue={0}
            InputLabelProps={{ shrink: true }}
            InputProps={{ inputProps: { min: 0 }}}
            {...props}
        />
    )
}

export default FormNumberField;
