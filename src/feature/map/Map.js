import React from 'react'
import { Box } from '@mui/material';
import { MapContainer, TileLayer, ZoomControl, useMap } from 'react-leaflet'

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
            <MapContainer center={[45.424721, -75.695000]} zoom={12} zoomControl={false} ref={setMap}>
                <TileLayer url={'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'} subdomains={['mt0','mt1','mt2','mt3']} maxZoom={20} />
                <ZoomControl position={'bottomright'}/>
            </MapContainer>
        </Box>
    )
}

export default Map;