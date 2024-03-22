import React from 'react';
import { TextField } from '@mui/material';

/* Year Field for Filter Box */
const FormYearField = ({ name, ...props }) => {
    const label = name.replace(/([A-Z])/g, " $1");
    const currentYear = new Date().getFullYear()

    return (
        <TextField
            size='small'
            type='number'
            name={name}
            label={label.charAt(0).toUpperCase() + label.slice(1)}
            InputLabelProps={{ shrink: true }}
            InputProps={{ inputProps: { min: 0, max: currentYear }}}
            {...props}
        />
    )
}

export default FormYearField;
