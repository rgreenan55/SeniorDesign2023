import React from 'react';
import { Box, Paper, Tabs, Tab, TextField, Autocomplete } from '@mui/material';
import SearchTab from './SearchTab';

const Sidebar = () => {
    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (_, newValue) => setTabValue(newValue);

    return (
        <Paper style={{ borderRadius: '24px' }}>
            <Box height='95vh'>
                <Tabs value={tabValue} onChange={handleTabChange} variant='fullWidth'>
                    <Tab label='Search' />
                    <Tab label='Filter' />
                </Tabs>
                <Box role='tabpanel' hidden={tabValue !== 0} p='16px'>
                    {/* https://mui.com/material-ui/react-autocomplete/#google-maps-place */}
                    <SearchTab />
                </Box>
                <Box role='tabpanel' hidden={tabValue !== 1} p='16px'>
                    Hey
                </Box>
            </Box>
        </Paper>
    );
}

export default Sidebar;