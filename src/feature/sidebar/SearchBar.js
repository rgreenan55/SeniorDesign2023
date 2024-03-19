import React from 'react';
import { Autocomplete, Box, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const SearchBar = () => {
    const [value, setValue] = React.useState("");
    const [inputValue, setInputValue] = React.useState("")
    const [options, setOptions] = React.useState([]);

    React.useEffect(() => {

        // let data = inputValue ? ['aaa', 'aab'] : [];    // TODO: Retrieve from Google via API?
        
        let autocomplete;

        function initAutocomplete(){
            autocomplete = new google.maps.places.Autocomplete(
                document.getElementById('autocomplete'),
                {
                    types: ['address'],
                    componentRestictions: {'country' :['CA']},
                    fields: ['place_id', 'geometry', 'name']
                }
            )
        }

        initAutocomplete();
        if(inputValue){ // checl for user inputting value
            setOptions(autocomplete);
        }

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
        <Box display='flex' paddingY='8px' paddingX='16px'>
            <Autocomplete
                value={value}
                //options={options}
                // wait for results to get in before applying options.filter
                // does not work still crashes with same error
                options={!options ? [{label:"Loading...", id:0}] : options }
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
                sx={{ flex: 1 }}
            />
            <IconButton size='small'>
                <KeyboardReturnIcon fontSize='small' />
            </IconButton>
        </Box>
    );
}

export default SearchBar;