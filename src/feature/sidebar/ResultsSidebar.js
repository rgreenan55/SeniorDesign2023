import React from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

const ResultsSidebar = ({ setData, data }) => {
    return (
        <Paper>            
            <Box height='100vh'>
                <Box display='flex' flex={1} justifyContent='end'>
                    <IconButton onClick={() => setData(null)}> <ExitToApp sx={{ transform: 'scaleX(-1)' }}/> </IconButton>
                </Box>
                <Typography flex={1} textAlign='center'> Loading... </Typography>
            </Box>
        </Paper>
    );
}

export default ResultsSidebar;