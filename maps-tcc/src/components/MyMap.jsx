import { MapContainer, TileLayer } from 'react-leaflet'

import './MyMap.css'
import 'leaflet/dist/leaflet.css'

export function MyMap() {
  const center = [-0.00406,-51.08518]


  return(
    <MapContainer zoom={16.3} center={center}>

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />


    </MapContainer>
  )
}