import React from 'react';
import { Autocomplete, Box, Divider, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SearchAddress } from '../../services/address.js';

const SearchBar = ({ setData }) => {
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('')
    const [options, setOptions] = React.useState([]);

    React.useEffect(() => {
        const GetAddressOptions = async () => {
            let data = await SearchAddress(inputValue);
            setOptions(data || []);
        } 
        GetAddressOptions();
    }, [inputValue]);

    const onSubmit = (event) => {
        event.preventDefault();
        setData({ origin: 'search', value: value });
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
        let text = option // option.address
        //let lat = option.lat;
        //let lng = option.lng;

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
                            {text}
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            {"Lat Lng"}
                        </Typography>
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