import React from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { GetAssessmentByAddress, GetAssessmentByArguments } from '../../services/assessment';

const ResultsSidebar = ({ setData, data }) => {
    const [assessment, setAssessment] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        const request = async () => {
            let result = null;
            if (data.origin === 'search') result = await GetAssessmentByAddress(data.value)
            else if (data.origin === 'filter') result = await GetAssessmentByArguments(data.value)
            setAssessment(result)
            setLoading(false);
        }
        setLoading(true);
        request();
    }, []);

    const formatCurrency = (value) => (value ? '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : null)
    
    return (
        <Paper>            
            <Box height='100vh'>
                <Box display='flex' flex={1} justifyContent='end'>
                    <IconButton onClick={() => { setAssessment(null); setData(null); }}> <ExitToApp sx={{ transform: 'scaleX(-1)' }}/> </IconButton>
                </Box>
                {assessment ? (
                    <Paper>
                        {data.origin === 'search' && <Typography flex={1} textAlign='center'> {data.value} </Typography>}
                        <Typography flex={1} textAlign='center'> Actual: {formatCurrency(assessment.actual)} </Typography>
                        <Typography flex={1} textAlign='center'> Estimate: {formatCurrency(assessment.estimate)} </Typography>
                        <Typography flex={1} textAlign='center'> Difference: {formatCurrency(assessment.difference) + ` (${assessment.percent?.toFixed(2)}%)`} </Typography>
                    </Paper>
                ) : (
                    <Typography flex={1} textAlign='center'> {loading ? 'Loading...' : 'Error Retrieving Assessment'} </Typography>
                )} 
            </Box>
        </Paper>
    );
}

export default ResultsSidebar;