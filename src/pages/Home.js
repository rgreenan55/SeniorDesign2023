import React from 'react';
import Sidebar from '../feature/sidebar/Sidebar';
import { Grid } from '@mui/material';
import Map from '../feature/map/Map';

const Home = () => {
    return (
        <>
            <Map />
            <Grid container height='100vh' p='16px' justify='flex-end'>
                <Grid item xs={3} zIndex={1}>
                    <Sidebar />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;