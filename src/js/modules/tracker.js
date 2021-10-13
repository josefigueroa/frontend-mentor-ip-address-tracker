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
    const {query, city, country, zip, timezone, isp} = data;

    this.ipEl.textContent = query;
    this.locationEl.innerHTML = `${city}, ${country} ${zip}`;
    this.timezoneEl.textContent = timezone;
    this.ispEl.textContent = isp;
  }

}