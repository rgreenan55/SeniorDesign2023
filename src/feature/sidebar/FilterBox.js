import React from 'react';
import { Box, Button, Divider, Stack } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FormTextField, FormNumberField, FormYearField } from '../../components/CustomTextFields';
import { RequestAIArguments } from '../../services/assessment';

/* Filter box which allows user to input house filters to perform assessment by */
const FilterBox = ({ setData }) => {
    const [open, setOpen] = React.useState(false)
    const [inputFields, setInputFields] = React.useState([]);

    React.useEffect(() => {
        const getFields = async () => {
            const fields = await RequestAIArguments();
            setInputFields(fields || []);
        }
        getFields();
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
    
        const value = {};
        for (var [key, val] of formData.entries())  value[key] = val || 0;
        setData({ origin: 'filter', value: value });
    }

    return (
        <Box>
            {open && (
                <Box component='form' onSubmit={handleSubmit}>
                    <Stack spacing={2} display='flex' flexGrow={1} justifyContent='center' padding='24px'>
                        {inputFields.map(field => {
                            return <FormTextField key={field.name} name={field.name} />
                        })}
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