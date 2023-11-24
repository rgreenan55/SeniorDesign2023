import React from 'react';
import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';

// https://mui.com/material-ui/react-autocomplete/#google-maps-place
const SearchTab = () => {
    const [value, setValue] = React.useState("");
    const [inputValue, setInputValue] = React.useState("")
    const [options, setOptions] = React.useState(["Hello", "Hey", "HelloHey"]);

    const onChange = (_, newValue) => {
        //setOptions(newValue ? [newValue, ...options] : options);
        if (options.indexOf(newValue) === -1) [newValue, ...options];
        setValue(newValue || "");
    }
    const onInputChange = (_, newInputValue) => setInputValue(newInputValue || "");
    const renderInput = (params) => <TextField {...params} label="Add a location" fullWidth />

    return (
        <Box>
            <Autocomplete
                getOptionLabel={(option) => typeof option === 'string' ? option : option.description}
                filterOptions={(x) => x}
                options={options}
                autoComplete
                includeInputInList
                filterSelectedOptions
                value={value}
                noOptionsText="No locations"
                onChange={onChange}
                onInputChange={onInputChange}
                renderInput={renderInput}
                renderOption={(props, option) => {
                    // const matches = option?.structured_formatting?.main_text_matched_substrings || [];
                    // const parts = parse(
                    //     option.structured_formatting.main_text,
                    //     matches.map((match) => [match.offset, match.offset + match.length]),
                    // );

                    const parts = [{ text: option }]

                    return (
                    <li {...props}>
                        <Grid container alignItems="center">
                            <Grid item sx={{ display: 'flex', width: 44 }}>
                                {/* <LocationOnIcon sx={{ color: 'text.secondary' }} /> */}
                            </Grid>
                            <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                                {parts.map((part, index) => (
                                    <Box
                                        key={index}
                                        component="span"
                                        sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
                                    >
                                        {part.text}
                                    </Box>
                                ))}
                                <Typography variant="body2" color="text.secondary">
                                    Secondary Text
                                {/* {option.structured_formatting.secondary_text} */}
                                {parts.text}
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