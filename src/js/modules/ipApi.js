export class IpApi{
  constructor(){
    this.url = 'https://geo.ipify.org/api/v2/country,city';
    this.apiKey = 'at_9xBKthaqNxBqRa4afvtvxe2OIsVjp';
  }

  async getIP(query = ''){
    let url = new URL(this.url)
    url.search = new URLSearchParams({
      domain: query,
      apiKey: "at_9xBKthaqNxBqRa4afvtvxe2OIsVjp"
    })
    
    const response = await fetch(url);
    return await response.json();
  }


  // api(query = '80.102.214.91'){
  //   let url = new URL('https://geo.ipify.org/api/v2/country')
  //   url.search = new URLSearchParams({
  //     domain: query,
  //     apiKey: "at_9xBKthaqNxBqRa4afvtvxe2OIsVjp"
  //   })

  //   fetch(url)
  //     .then((response) => {
  //       return response.json()
  //     }).then((res) => {
  //       console.log(res);
  //     })
  //   // fetch("https://geo.ipify.org/api/v2/country", {
  //   //   apiKey: "at_9xBKthaqNxBqRa4afvtvxe2OIsVjp"
  //   // })
  //   // .then( (response) => { 
  //   //   console.log(response)
  //   // });
  // }

}