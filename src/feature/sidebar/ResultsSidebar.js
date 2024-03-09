import React from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { GetAssessmentByAddress, GetAssessmentByArguments } from '../../services/assessment';

const ResultsSidebar = ({ setData, data }) => {
    const [assessment, setAssessment] = React.useState(null)

    React.useEffect(() => {
        const request = async () => {
            let result = null;
            if (false) result = await GetAssessmentByAddress(data)
            else result = await GetAssessmentByArguments(data)
            setAssessment(result)
        }
        request();
    }, []);
    
    return (
        <Paper>            
            <Box height='100vh'>
                <Box display='flex' flex={1} justifyContent='end'>
                    <IconButton onClick={() => setData(null)}> <ExitToApp sx={{ transform: 'scaleX(-1)' }}/> </IconButton>
                </Box>
                <Typography flex={1} textAlign='center'> {assessment || 'Loading...'} </Typography>
            </Box>
        </Paper>
    );
}

export default ResultsSidebar;