import '../../node_modules/leaflet-search/dist/leaflet-search.src'
import '../../node_modules/leaflet-search/dist/leaflet-search.src.css'

import { useMap } from 'react-leaflet'
import { Control, geoJSON, layerGroup } from 'leaflet'
import { useEffect } from 'react'

import areaLazer from '../data/areas_de_lazer.json'
import atendimento from '../data/atendimento_ao_publico.json'
import salaDeAula from '../data/blocos_sala_de_aula.json'
import graduacao from '../data/cursos_de_graduacao.json'
import labs from '../data/labs_e_outros.json'



export function BuscaBox(){
  const map = useMap()

  const provider = geoJSON([areaLazer, atendimento, salaDeAula, graduacao, labs], 
    {style: function () {
    return {color: 'transparent'}
  }}).addTo(map)

  var markersLayer = new layerGroup();	//layer contain searched elements
  map.addLayer(markersLayer);

  const searchControl = new Control.Search({
    layer: provider,
    propertyName: 'Name',
     textPlaceholder: 'Buscar',
     textCancel:'Cancelar',
     zoom: 10000,
    initial: false,
    collapsed: false,
    
  })

  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);

 });
  
  return null
}