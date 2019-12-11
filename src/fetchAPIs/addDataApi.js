import * as ipJsonServer from './ipServer'
export default function addDataApi(data) {

    return new Promise((resolve, reject) => {
      
      const url = ipJsonServer.localhost1
      fetch(url, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((res) => {
          console.log('res', res)
          resolve(res);
        })
        .catch((error) => {
          console.log('error', error)
          reject(error);
        });
    });
  }
