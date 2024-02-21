import React from 'react';
import { Box, Button, Divider, Stack } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FormTextField, FormNumberField, FormYearField } from '../../components/CustomTextFields';

const FilterBox = ({ setData }) => {
    const [open, setOpen] = React.useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
    
        const obj = {};
        for (var [key, val] of formData.entries())  obj[key] = val;
        setData(obj);
    }

    return (
        <Box>
            {open && (
                <Box component='form' onSubmit={handleSubmit}>
                    <Stack spacing={2} display='flex' flexGrow={1} justifyContent='center' padding='24px'>
                        <FormTextField name="location"/>

                        <Stack spacing={2} direction='row'>
                            <FormNumberField name="rooms" />
                            <FormNumberField name="bedrooms" />
                            <FormNumberField name="bathrooms"/>
                        </Stack>

                        <FormYearField name="dateConstructed" />

                        <Button type='submit' variant='contained'>Assess by Filters</Button>
                    </Stack>
                </Box>
            )}
            {open && <Divider />}
            <Button onClick={() => setOpen(!open)} fullWidth style={{ borderRadius: open ? '0px 0px 24px 24px' : '24px' }} data-testid="FilterDropDown">
                {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Button>
        </Box>
    )
}

export default FilterBox;