export class Tracker{
  constructor(){
    this.trackerEl = document.querySelector('.tracker');
    this.ipEl = document.querySelector('#trackerIP');
    this.locationEl = document.querySelector('#trackerLocation');
    this.timezoneEl = document.querySelector('#trackerTimezone');
    this.ispEl = document.querySelector('#trackerISP');
  }

  displayInfo(data){
    this.trackerEl.style.opacity = 1;
    this.trackerInfo(data)
  }

  trackerInfo(data){
    const {ip, location: {city, country, postalCode, timezone}, isp} = data;

    this.ipEl.textContent = ip;
    this.locationEl.innerHTML = `${city}, ${country} ${postalCode}`;
    this.timezoneEl.textContent = `UTC ${timezone}`;
    this.ispEl.textContent = isp;
  }

}