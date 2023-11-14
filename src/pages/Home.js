import React from 'react';
import Sidebar from '../feature/sidebar/Sidebar';
import { Grid } from '@mui/material';
import Map from '../feature/map/Map';

const Home = () => {
    return (
        <>
            <Map />
            <Grid container height='100vh' alignItems='center'>
                <Grid item xs={8.9}/>
                <Grid item xs={3} zIndex={1}>
                    <Sidebar />
                </Grid>
                <Grid item xs={0.1} />
            </Grid>
        </>
    );
}

export default Home;