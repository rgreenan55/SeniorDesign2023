import React from 'react';
import Sidebar from '../feature/sidebar/Sidebar';
import { Grid } from '@mui/material';
import Map from '../feature/map/Map';

const Home = () => {
    return (
        <>
            <Map />
            <Grid container>
                <Grid item xs={8.9}/>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={0.1} />
            </Grid>
        </>
    );
}

export default Home;