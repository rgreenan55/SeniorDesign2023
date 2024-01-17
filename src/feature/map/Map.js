import React from 'react'
import { Box } from '@mui/material';
import { MapContainer, TileLayer, ZoomControl, useMap } from 'react-leaflet'

const coordinates = {
    'Fredericton': [45.96479551374326, -66.64788378405906],
    'Moncton': [46.14249431518082, -64.71088019896406],
    'NewBrunswick': [46.93751810993752, -66.21517610891922],
    'Default': [38.685516, -101.073324]
}

const Recenter = ({ location }) => {
    if (location) {
        const map = useMap();
        map.setView(location, 14);
    }
}

const Map = () => {
    const [location, setLocation] = React.useState();

    React.useEffect(() => {        
        const showCurrnetPosition = (position) => {
            setLocation([position.coords.latitude, position.coords.longitude])
        }
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(showCurrnetPosition) : coordinates.Default;
    }, [])

    return (
        <Box position='absolute' width='100%' height='100vh' zIndex={1}>
            <MapContainer center={coordinates.Fredericton} zoom={14} zoomControl={false}>
                <TileLayer url={'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'} subdomains={['mt0','mt1','mt2','mt3']} />
                <ZoomControl position={'bottomright'}/>
                {/* <Recenter location={location} /> */}
            </MapContainer>
        </Box>
    )
}

export default Map;