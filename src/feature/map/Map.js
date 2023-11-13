import { Box } from '@mui/material';
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

// https://www.youtube.com/watch?v=jD6813wGdBA&ab_channel=AlejandroAO-Software%26Ai
// Fredericton      45.96479551374326, -66.64788378405906
// Moncton          46.14249431518082, -64.71088019896406
// New Brunswick    46.93751810993752, -66.21517610891922
const coordinates = {
    'Fredericton': [45.96479551374326, -66.64788378405906],
    'Moncton': [46.14249431518082, -64.71088019896406],
    'NewBrunswick': [46.93751810993752, -66.21517610891922],
}

const Map = () => {

    return (
        <Box position='absolute' width='100%' height='100vh' zIndex={1}>
            <MapContainer center={coordinates.Fredericton} zoom={14}>
                {/* <TileLayer 
                    url='http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
                    subdomains={['mt0','mt1','mt2','mt3']}
                /> */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </Box>
    )
}

export default Map;