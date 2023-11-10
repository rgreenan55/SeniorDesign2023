import React from 'react'
import { Box } from '@mui/material';
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'

// https://www.youtube.com/watch?v=jD6813wGdBA&ab_channel=AlejandroAO-Software%26Ai
const Map = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;