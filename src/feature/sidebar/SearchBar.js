import React from 'react';
import { Autocomplete, Box, InputAdornment, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [value, setValue] = React.useState("");
    const [inputValue, setInputValue] = React.useState("")
    const [options, setOptions] = React.useState([]);

    React.useEffect(() => {
        let data = inputValue ? ['aaa', 'aab'] : [];    // TODO: Retrieve from Google via API?
        setOptions(data);
    }, [inputValue]);

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
        <Box paddingY='8px' paddingX='16px'>
            <Autocomplete
                value={value}
                options={options}
                noOptionsText={"No Locations Found"}
                onChange={(_, newValue) => {
                    setInputValue(newValue);
                    setValue(newValue);
                }}
                onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
                freeSolo={!inputValue}
                renderInput={renderInput}
                //renderOption={renderOption}
                clearIcon={null}
            />
        </Box>
    );
}

export default SearchBar;