import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const selectors = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

selectors.loader.classList.add('is-hidden');
selectors.error.classList.add('is-hidden');
selectors.catInfo.classList.add('is-hidden');

selectors.select.addEventListener('change', onSelectBreed);

function onSelectBreed(e) {
  console.log(e.target);
  createMarkupBreedList(e.target);
}

function createMarkupBreedList() {
  const markup = Breeds.map(
    ({ id, name }) => `<option value="${id}">${name}</option>`
  ).join('');
  select.insertAdjacentHTML('beforeend', markup);
}

// function toggleLoader() {
//   selectors.loader.classList.toggle('loader');
// }

// function onError() {
//   selectors.select.classList.remove('is-hidden');
//   selectors.loader.classList.add('is-hidden');

//   Notify.failure('Oops! Something went wrong! Try reloading the page!', {
//     position: 'center-center',
//     timeout: 5000,
//     width: '400px',
//     fontSize: '24px',
//   });
// }
