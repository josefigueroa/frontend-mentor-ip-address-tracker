import leaflet from 'leaflet';
import iconLocation from '../../img/icon-location.svg';

export class Map{
  constructor(mapLat, mapLong){
    this.mapEl = document.querySelector('#mapId');
    this.mapSpinner = document.querySelector('.map__spinner');
    this.mapCoor = {
      'mapLat' : mapLat,
      'mapLong' : mapLong,
    }
    
    this.map = this.mapOptions();
    this.displayMap();
  }    

  resetMap(){
    let mapcontainer = leaflet.DomUtil.get('mapId');
    
    if(mapcontainer !== null){
      mapcontainer._leaflet_id = null;
    }
  }

  displayMap = () => {
    this.mapEl.style.opacity = 1;
    this.mapSpinner.style.display = 'none';
    this.layerOptions();
    this.markerOptions();
  }

  mapOptions= () =>{   
    this.resetMap();
    return leaflet.map('mapId').setView([this.mapCoor.mapLat, this.mapCoor.mapLong], 13);
  }

  iconOptions= () =>{
    return leaflet.icon({
      iconUrl: iconLocation,
      iconSize: [45, 55]
    });
  }

  layerOptions= () =>{
    return leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      errorTileUrl: 'Imposible load the map'
    }).addTo(this.map);
  }

  markerOptions = () =>{
    return leaflet.marker([this.mapCoor.mapLat, this.mapCoor.mapLong],{
      icon: this.iconOptions()
    }).addTo(this.map);
  }
}