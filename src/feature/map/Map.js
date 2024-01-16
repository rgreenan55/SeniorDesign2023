import React from 'react'
import { Box } from '@mui/material';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'

const coordinates = {
    'Fredericton': [45.96479551374326, -66.64788378405906],
    'Moncton': [46.14249431518082, -64.71088019896406],
    'NewBrunswick': [46.93751810993752, -66.21517610891922],
}

const tileLayerOptions = {
    'google': { url: 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', subdomains: ['mt0','mt1','mt2','mt3'] },
    'openstreetmap': { url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
}

const Map = () => {
    const [tileLayer, setTileLayer] = React.useState(tileLayerOptions.google)

    return (
        <Box position='absolute' width='100%' height='100vh' zIndex={1}>
            <MapContainer center={coordinates.Fredericton} zoom={18} zoomControl={false}>
                <TileLayer {...tileLayer}/>
                <ZoomControl position={'bottomright'}/>
            </MapContainer>
        </Box>
    )
}

export default Map;