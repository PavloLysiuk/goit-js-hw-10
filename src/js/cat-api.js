import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT = '/breeds';
const API_KEY =
  'live_TzQzII2mDrBqeghPsCtH5cSfSuyDQcdvgcesZiueTT55HV5mo2EOQ98nYpxb5FnF';
axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}`)
    .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
