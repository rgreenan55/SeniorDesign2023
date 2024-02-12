import React from 'react';
import { Box, Grid } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from '../feature/sidebar/Sidebar';
import ResultsSidebar from '../feature/sidebar/ResultsSidebar';
import Map from '../feature/map/Map';
import { GetAssessment } from '../services/assessment';

const ResultsSidebarContainer = ({ children }) => {
    return (
        <Box
            key='results-sidebar-container'
            position='absolute'
            width={100/4 + 'vw'}
            zIndex={2}
            component={motion.div}
            initial={{ x: '-100%' }}
            animate={{ x: 0, transition: { duration: 0.5 }}}
            exit={{ x: '-100%', transition: { duration: 0.5 }}}
        >
            {children}
        </Box>
    )
}

const Home = () => {
    const [searchData, setSearchData] = React.useState(null);

    React.useEffect(() => {
        const f = async () => {
            let a = await GetAssessment();
            console.log(a);
        }
        f();
    }, [])

    return (
        <>
            <Map />
            <Grid container height='100vh'>
            
                <AnimatePresence>
                {searchData && (
                    <ResultsSidebarContainer>
                        <ResultsSidebar setData={setSearchData} data={searchData} />
                    </ResultsSidebarContainer>
                )}
                </AnimatePresence>

                <Grid item component={motion.div} xs={3} zIndex={1} p='16px'>
                    <Sidebar setData={setSearchData} />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;