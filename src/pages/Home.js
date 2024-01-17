import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../feature/sidebar/Sidebar';
import ResultsSidebar from '../feature/sidebar/ResultsSidebar';
import Map from '../feature/map/Map';
import { AnimatePresence, motion } from 'framer-motion';

const resultsMotion = {
    key: 'hello',
    initial: { x: '-100%' },
    animate: {
        x: 0,
        transition: { 
            duration: 0.7,
        }
    },
    exit: { x: '-100%', transition: { duration: 0.7 }}
}


const Home = () => {
    const [searchData, setSearchData] = React.useState(null);

    return (
        <>
            <Map />
            <Grid container height='100vh'>
                <AnimatePresence>
                {searchData && (
                    <Grid component={motion.div} item xs={3} zIndex={2} {...resultsMotion}>
                        <ResultsSidebar setData={setSearchData} data={searchData} />
                    </Grid>
                )}
                </AnimatePresence>
                <Grid component={motion.div} xs={3} zIndex={1} p='16px'>
                    <Sidebar setData={setSearchData} />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;