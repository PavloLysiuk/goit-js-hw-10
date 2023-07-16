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

selectors.error.hidden = true;
selectors.catInfo.hidden = true;

// fetchBreeds()
//   .then(data => {
//     const markup = data
//       .map(({ id, name }) => `<option value="${id}">${name}</option>`)
//       .join('');
//     selectors.select.innerHTML = markup;
//     new SlimSelect({
//       select: '.breed-select',
//     });
//     selectors.loader.classList.replace('loader', 'is-hidden');
//   })
//   .catch(onError());

// selectors.select.addEventListener('change', onSelectBreed);

// function onSelectBreed(e) {}

function onError() {
  selectors.select.classList.remove('is-hidden');
  selectors.loader.classList.replace('loader', 'is-hidden');

  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or select another cat breed!',
    {
      position: 'center-center',
      timeout: 5000,
      width: '400px',
      fontSize: '24px',
    }
  );
}
