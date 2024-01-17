import React from 'react';
import { Autocomplete, Box, Divider, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button } from '@mui/base';

const SearchBar = ({ setData }) => {
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('')
    const [options, setOptions] = React.useState([]);

    React.useEffect(() => {
        // TODO : Have this ping external API for address auto-complete options.
        let data = inputValue ? ['aaa', 'aab'] : [];
        setOptions(data);
    }, [inputValue]);

    const onSubmit = (event) => {
        event.preventDefault();
        setData(value);
    }

    const renderInput = (params) => (
        <TextField
            {...params}
            placeholder='Search Address'
            variant='standard'
            fullWidth
            InputProps={{
                ...params.InputProps,
                startAdornment: <InputAdornment position='start'> <SearchIcon/> </InputAdornment>,
                disableUnderline: true
            }}
        />
    )

    return (
        <Box display='flex' paddingY='8px' paddingX='16px'>
            <Autocomplete
                value={value}
                options={options}
                noOptionsText={"No Locations Found"}
                onChange={(_, newValue) => setValue(newValue)}
                onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
                autoComplete
                includeInputInList
                disableClearable
                renderInput={renderInput}
                sx={{ flex: 1 }}
            />
            <IconButton size='small' onClick={onSubmit}>
                <KeyboardReturnIcon fontSize='small' />
            </IconButton>
        </Box>
    );
}

export default SearchBar;