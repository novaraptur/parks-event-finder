
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
  if (response.status === 404) {
    throw new Error("Sorry, we can't find the page you are looking for.");
  } else if (response.status === 500) {
    throw new Error('Internal Server Error. Our whole team is now aware.');
  } else if (response.status !== 200) {
    throw new Error('Sorry, something went wrong.');
  } else {
    return response.json();
  }
}

export { getEvents, getSingleEvent, getSinglePark };
