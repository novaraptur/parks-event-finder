
const baseURL = 'https://developer.nps.gov/api/v1';
const apiKey = 'DtaJy6hVJO84YkAl6l4viK8uOnHDO1SQ56uDMKMt';

const getEvents = (stateCode) => {
  return fetch(`${baseURL}/events?stateCode=${stateCode}&&api_key=${apiKey}`)
    .then(checkResponse)
}

const getSingleEvent = (id) => {
  return fetch(`${baseURL}/events?id=${id}&&api_key=${apiKey}`)
    .then(checkResponse)
}

const getSinglePark = (id) => {
  return fetch(`${baseURL}/parks?id=${id}&&api_key=${apiKey}`)
    .then(checkResponse)
}

const checkResponse = (response) => {

}

export { getEvents, getSingleEvent, getSinglePark };
