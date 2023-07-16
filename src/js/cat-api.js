// import axios from "axios";

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_TzQzII2mDrBqeghPsCtH5cSfSuyDQcdvgcesZiueTT55HV5mo2EOQ98nYpxb5FnF';
// axios.defaults.headers.common['x-api-key'] = API_KEY;

function fetchBreeds() {
  const END_POINT = '/breeds';
  fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      return data;
    });
}

function fetchCatByBreed(breedId) {
  const END_POINT = '/images/search?breed_ids=${breedId}';
  fetch(`${BASE_URL}${END_POINT}&api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    });
}

export { fetchBreeds, fetchCatByBreed };

fetchCatByBreed('abys')