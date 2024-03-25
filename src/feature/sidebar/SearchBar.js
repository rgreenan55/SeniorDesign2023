import React from 'react';
import { Autocomplete, Box, Grid, IconButton, InputAdornment, TextField, Tooltip, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SearchAddress } from '../../services/address.js';

/* Search bar which allows the searching of addresses */
const SearchBar = ({ setData }) => {
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('')
    const [options, setOptions] = React.useState([]);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        const GetAddressOptions = async () => {
            let data = await SearchAddress(inputValue);
            setOptions(data || []);
        } 
        GetAddressOptions();
    }, [inputValue]);

    const onSubmit = (event) => {
        event.preventDefault();

        if (value) {
            setData({ origin: 'search', value: value });
            setError(false);
        } else {
            setError(true)
        }
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

    const renderOption = (props, option) => {
        return (
            <li {...props}>
                <Grid container alignItems="center" sx={{ border: '1px' }}>
                    <Grid item sx={{ display: 'flex', width: 44 }}>
                        <LocationOnIcon sx={{ color: 'text.secondary' }} />
                    </Grid>
                    <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                        <Box
                            component="span"
                        >
                            {option.address}
                        </Box>
                        <Typography variant="body2" color="text.secondary"> {"Lat: " + option.lat} </Typography>
                        <Typography variant="body2" color="text.secondary"> {"Lng: " + option.lng} </Typography>
                    </Grid>
                </Grid>
            </li>
        )
    }
        
    return (
        <Box display='flex' paddingY='8px' paddingX='16px'>
                <Autocomplete
                    value={value}
                    options={options}
                    noOptionsText={"No Locations Found"}
                    onChange={(_, newValue) => setValue(newValue)}
                    onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
                    getOptionLabel={(option) => option.address}
                    isOptionEqualToValue={(option, value) => option.address === value.address}
                    autoComplete
                    includeInputInList
                    renderInput={renderInput}
                    renderOption={renderOption}
                    sx={{ flex: 1 }}
                />
            <IconButton size='small' onClick={onSubmit}>
                <KeyboardReturnIcon fontSize='small' />
            </IconButton>
        </Box>
    );
}

export default SearchBar;