
const baseURL = 'https://developer.nps.gov/api/v1';
const apiKey = process.env.REACT_APP_PARKS_API_KEY;

const getEvents = async (stateCode) => {
  return await fetch(`${baseURL}/events?stateCode=${stateCode}&&api_key=${apiKey}`)
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
