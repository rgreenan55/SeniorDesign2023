import React from 'react';
import { Paper, Stack } from '@mui/material';
import SearchBar from './SearchBar';
import FilterBox from './FilterBox';

const Sidebar = () => {
    return (
        <Stack spacing={2}>
            <Paper style={{ borderRadius: '12px' }}>
                <SearchBar />
            </Paper>
            <Paper style={{ borderRadius: '24px' }}>
                <FilterBox />
            </Paper>
        </Stack>

    );
}

export default Sidebar;