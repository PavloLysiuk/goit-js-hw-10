const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_TzQzII2mDrBqeghPsCtH5cSfSuyDQcdvgcesZiueTT55HV5mo2EOQ98nYpxb5FnF';

function fetchBreeds() {
  fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    });
}

function fetchCatByBreed(breedId) {}

export { fetchBreeds, fetchCatByBreed };
