import React from 'react';
import { Box, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { GetAssessmentByAddress, GetAssessmentByArguments } from '../../services/assessment';

const JSONtoTypograph = (json) => {
    let textArray = [];
    for (var key in json) {
        let text = key.charAt(0).toUpperCase() + key.slice(1) + "||" + json[key];
        textArray.push(text);
    }

    return (
        <TableContainer sx={{ mt: '10%', width: 'auto', boxShadow: 5 }}>
            <Table size="small">
                <TableBody>
                    {textArray.map(text => (
                        <TableRow key={text}>
                            <TableCell align='left'> {text.split('||')[0]} </TableCell>
                            <TableCell align='right'>  {text.split('||')[1]} </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

/* Result Sidebar for displaying Assessment Results */
const ResultsSidebar = ({ setData, data }) => {
    const [assessment, setAssessment] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        const request = async () => {
            let result = null;
            if (data.origin === 'search') result = await GetAssessmentByAddress(data.value?.address)
            else if (data.origin === 'filter') result = await GetAssessmentByArguments(data.value)
            setAssessment(result);
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
                    <Box>
                        <Typography variant='h4' flex={1} textAlign='center'> {data.origin == 'search' ? 'Search By Address' : 'Search By Filters'}</Typography>
                        {data.origin === 'search' ? (
                            <Typography variant='h6' flex={1} textAlign='center'> {data.value.address} </Typography>
                        ) : (
                            <Box mx='10%'>
                                {JSONtoTypograph(data.value)}
                            </Box>
                        )}

                        <Box mx='10%' marginTop='20%' boxShadow={5}>
                            <Typography variant='h6' textAlign='center' whiteSpace='pre-line'> Estimate: {'\n' + formatCurrency(assessment.estimate)} </Typography>
                            {data.origin == 'search' && (
                                <>
                                    <Typography mt='5%' variant='h6' flex={1} textAlign='center' whiteSpace='pre-line'> Actual: {'\n' + formatCurrency(assessment.actual)} </Typography>
                                    <Typography mt='5%' variant='h6' flex={1} textAlign='center' whiteSpace='pre-line'> Difference: {'\n' + formatCurrency(assessment.difference) + ` (${assessment.percent?.toFixed(2)}%)`} </Typography>
                                </>
                            )}
                        </Box>
                    </Box>
                ) : (
                    <Typography flex={1} textAlign='center'> {loading ? 'Loading...' : 'Error Retrieving Assessment'} </Typography>
                )} 
            </Box>
        </Paper>
    );
}

export default ResultsSidebar;