import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'

import './MyMap.css'
import 'leaflet/dist/leaflet.css'

import areaLazer from '../data/areas_de_lazer.json'
import atendimento from '../data/atendimento_ao_publico.json'
import salaDeAula from '../data/blocos_sala_de_aula.json'
import graduacao from '../data/cursos_de_graduacao.json'
import labs from '../data/labs_e_outros.json'

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

  const salaDeAulaStyle = {
    fillColor: '#7B68EE',
    fillOpacity: 0.4,
    stroke: false
  }

  const graduacaoStyle = {
    fillColor: '#8A2BE2',
    fillOpacity: 0.4,
    stroke: false
  }
  const labsStyle = {
    fillColor: '#78e9cd',
    fillOpacity: 0.4,
    stroke: false
  }

  const onEach = (lista, layer) => {
   // const namesBloco = lista.properties.Name
  // const imagBloco = lista.properties.description
   // layer.bindPopup(imagBloco + namesBloco)
   layer.bindPopup(
    `<div style="width:300px">
    <h1> ${lista.properties.Name} </h1><br>
    <div style="display: flex;
    justify-content: center;
    style="width:300px"
  "> 
    <content>
    ${lista.properties.description} </content>
    </div>
    
    </div>`, {maxWidth:'700'})
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
     <GeoJSON
      data={salaDeAula}
      style={salaDeAulaStyle}
      onEachFeature={onEach}
    />
    <GeoJSON
      data={graduacao}
      style={graduacaoStyle}
      onEachFeature={onEach}
    />
    <GeoJSON
      data={labs}
      style={labsStyle}
      onEachFeature={onEach}
    />

    </MapContainer>
  )
}