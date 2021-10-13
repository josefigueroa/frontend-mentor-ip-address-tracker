export class IpApi{
  constructor(){
    this.url = 'http://ip-api.com/json/';
  }

  async getIP(query = ''){
    const response = await fetch(this.url + query);
    return await response.json();
  }

}