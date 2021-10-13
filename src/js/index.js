import {IpApi} from './modules/ipApi';
import {Map} from './modules/map';
import {Tracker} from './modules/tracker';
import "leaflet/dist/leaflet.css";
import "../scss/style.scss";

const api = new IpApi();
const tracker = new Tracker();


const fetchApi = async (query) => {
  let data = await api.getIP(query);

  tracker.displayInfo(data);
  new Map(data.location.lat, data.location.lng);
}

const formValidation = (ipValue) =>{
  let ipFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  let domainFormat = /^[a-z0-9]+([-.][a-z0-9]+)*\.[a-z]{2,}$/i;

  if((ipFormat.test(ipValue) || domainFormat.test(ipValue)) || ipValue == ''){
    document.querySelector('.form__group').classList.remove('form__group--error');
    fetchApi(ipValue);
  }
  else
  {
    document.querySelector('.form__group').classList.add('form__group--error');
    return false
  }
}


document.querySelector('#formIpAddress').addEventListener('submit',(e)=>{
  e.preventDefault();
  const formData = new FormData(e.target);
  const ipValue = formData.get('ip_address');

  formValidation(ipValue);
  
})

window.addEventListener('DOMContentLoaded', (e) =>{
  fetchApi();
})

