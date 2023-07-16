import { fetchBreeds } from './cat-api';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SlimSelect from 'slim-select';
new SlimSelect({
  select: '.breed-select',
});

const selectors = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

selectors.select.addEventListener('change', onSelect);
console.log(fetchBreeds());