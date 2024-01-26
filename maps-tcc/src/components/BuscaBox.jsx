import '../../node_modules/leaflet-search/dist/leaflet-search.src'
import '../../node_modules/leaflet-search/dist/leaflet-search.src.css'

import { useMap } from 'react-leaflet'
import { Control, geoJSON, layerGroup } from 'leaflet'
import { useEffect } from 'react'

import areaLazer from '../data/areas_de_lazer.json'
import atendimento from '../data/atendimento_ao_publico.json'


export function BuscaBox(){
  const map = useMap()

  const provider = geoJSON([areaLazer, atendimento], 
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