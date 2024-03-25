import React from 'react'
import { Box } from '@mui/material';
import { MapContainer, TileLayer, ZoomControl, useMap } from 'react-leaflet'

const coordinates = {
    'Fredericton': [45.96479551374326, -66.64788378405906],
    'Moncton': [46.14249431518082, -64.71088019896406],
    'NewBrunswick': [46.93751810993752, -66.21517610891922],
    'Default': [38.685516, -101.073324]
}

/* Map Component Utilizing Leaflet */
const Map = ({ addressInfo }) => {
    const [location, setLocation] = React.useState();
    const [map, setMap] = React.useState()
    const [marker, setMarker] = React.useState();

    React.useEffect(() => {

        if (addressInfo) {
            let { address, lat, lng } = addressInfo;
            if (lat && lng) {
                let latlng = new L.latLng(lat, lng)
                map.flyTo(latlng, 16)

                if (marker) map.removeLayer(marker);
                setMarker(new L.marker(latlng).bindTooltip(address, { direction: "right"}).addTo(map))
            }
        }

    }, [addressInfo])

    React.useEffect(() => {        
        const showCurrentPosition = (position) => {
            setLocation([position.coords.latitude, position.coords.longitude])
        }
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(showCurrentPosition) : coordinates.Default;
    }, [])

    return (
        <Box position='absolute' width='100%' height='100vh' zIndex={1}>
            <MapContainer center={coordinates.Fredericton} zoom={14} zoomControl={false} ref={setMap}>
                <TileLayer url={'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'} subdomains={['mt0','mt1','mt2','mt3']} maxZoom={20} />
                <ZoomControl position={'bottomright'}/>
                {/* <Recenter location={location} /> */}
            </MapContainer>
        </Box>
    )
}

export default Map;