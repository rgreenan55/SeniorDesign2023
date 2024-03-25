import React from 'react';
import { Paper, Stack } from '@mui/material';
import SearchBar from './SearchBar';
import FilterBox from './FilterBox';

/* Main Sidebar Content */
const Sidebar = ({ setData }) => {
    return (
        <Stack spacing={2}>
            <Paper style={{ borderRadius: '12px' }}>
                <SearchBar setData={setData} />
            </Paper>
            <Paper style={{ borderRadius: '24px' }}>
                <FilterBox setData={setData} />
            </Paper>
        </Stack>

    );
}

export default Sidebar;