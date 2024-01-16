import React from 'react';
import { Box, Paper, Tabs, Tab } from '@mui/material';
import SearchBar from './SearchBar';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (_, newValue) => setTabValue(newValue);

    return (
        <>
            <Paper style={{ borderRadius: '12px' }}>
                <Box paddingY='8px' paddingX='16px'>
                    <SearchBar />
                </Box>
            </Paper>
            <Paper style={{ borderRadius: '24px' }}>
                {/*TODO: Add Functionality for Filters*/}
            </Paper>
        </>

    );
}

export default Sidebar;