import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'

import './MyMap.css'
import 'leaflet/dist/leaflet.css'

import areaLazer from '../data/areas_de_lazer.json'
import atendimento from '../data/atendimento_ao_publico.json'
import { BuscaBox } from './BuscaBox'

export function MyMap() {
  const center = [-0.00406,-51.08518]

  const areaLazerStyle = {
    fillColor: '#BA55D3',
    fillOpacity: 0.5,
    stroke: false
  }

  const atendimentoStyle = {
    fillColor: 'red',
    fillOpacity: 0.3,
    stroke: false,
  }
  const onEach = (lista, layer) => {
    const namesBloco = lista.properties.Name
    const imagBloco = lista.properties.description

    layer.bindPopup(imagBloco + namesBloco)
  }


  return(
    <MapContainer zoom={16.3} center={center}>

      <BuscaBox />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

    <GeoJSON
      data={areaLazer}
      style={areaLazerStyle}
      onEachFeature={onEach}
    />
    <GeoJSON
      data={atendimento}
      style={atendimentoStyle}
      onEachFeature={onEach}
    />

    </MapContainer>
  )
}