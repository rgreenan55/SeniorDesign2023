import React from 'react';
import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';

/* Google Maps Key
// https://mui.com/material-ui/react-autocomplete/#google-maps-place
// https://developers.google.com/maps/documentation/javascript/get-api-key
// Requires a Google API Key --> Which Requires adding billing info (no charge?)
*/


const tempAddresses = [
    { address: "519 York Street", secondary: "One", coordinates: [45.95460375870982, -66.65090196227999]},
    { address: "525 York Street", secondary: "Two", coordinates: [45.954223182735184, -66.65104439255319]},
    { address: "527 York Street", secondary: "Three", coordinates: [45.95413689497914, -66.65109620687063]},
    { address: "531 York Street", secondary: "Four", coordinates: [45.95406233554447, -66.65110946169582]},
];
const SearchTab = () => {
    const [value, setValue] = React.useState("");
    const [inputValue, setInputValue] = React.useState("")
    const [options, setOptions] = React.useState(tempAddresses);

    const onChange = (_, newValue) => {
        //setOptions(newValue ? [newValue, ...options] : options);
        if (options.indexOf(newValue) === -1) [newValue, ...options];
        setValue(newValue || "");
    }
    const onInputChange = (_, newInputValue) => {
        setInputValue(newInputValue || "");
    }
    const renderInput = (params) => <TextField {...params} label="Add a location" fullWidth />
    const filterOptions = (values, filter) => values.filter(value => {
        return value.address.toLowerCase().includes(filter.inputValue.toLowerCase());
    })

    return (
        <Box>
            <Autocomplete
                filterOptions={filterOptions}
                options={options}
                autoComplete
                includeInputInList
                filterSelectedOptions
                value={value}
                noOptionsText="No locations"
                onChange={onChange}
                onInputChange={onInputChange}
                renderInput={renderInput}
                getOptionLabel={(option) => option.address || ""}
                renderOption={(props, option) => {
                    // const matches = option?.structured_formatting?.main_text_matched_substrings || [];
                    // const parts = parse(
                    //     option.structured_formatting.main_text,
                    //     matches.map((match) => [match.offset, match.offset + match.length]),
                    // );
                    console.log(option)

                    return (
                    <li {...props}>
                        <Grid container alignItems="center">
                            <Grid item sx={{ display: 'flex', width: 44 }}>
                                {/* <LocationOnIcon sx={{ color: 'text.secondary' }} /> */}
                            </Grid>
                            <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                                <Box component="span">
                                    {option.address}
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                {option.secondary}
                                </Typography>
                            </Grid>
                        </Grid>
                    </li>
                    );
                }}
            />
            
            Maybe a list of houses shown on the map currently?
        </Box>
    );
}

export default SearchTab;