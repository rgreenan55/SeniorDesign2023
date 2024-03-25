/* Tile Layers for Leaflet Map */
const tileLayerOptions = {
    'google': {
        url: 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        options: {
            subdomains: ['mt0','mt1','mt2','mt3']
        }
    },
    'openstreetmap': {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        options: {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    }
}

export default tileLayerOptions;