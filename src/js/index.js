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

selectors.select.classList.add('is-hidden');
selectors.loader.classList.add('is-hidden');
selectors.error.classList.add('is-hidden');
selectors.catInfo.classList.add('is-hidden');

selectors.select.addEventListener('change', onSelectBreed);

fetchBreeds()
  .then(data => {
    const markup = data
      .map(({ id, name }) => `
      <div class='select-wrapper'><option value="${id}">${name}</option></div>
      `
      ).join('');
    selectors.select.innerHTML = markup;
    new SlimSelect({
      select: '.breed-select',
    });
    loader.classList.add('is-hidden');
  })
  .catch(error => onError(error));

function onSelectBreed(e) {
  selectors.loader.classList.replace('is-hidden', 'loader');
  selectors.select.classList.add('is-hidden');
  selectors.catInfo.classList.add('is-hidden');

  const breedId = e.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(data => {
      selectors.loader.classList.replace('loader', 'is-hidden');
      selectors.select.classList.remove('is-hidden');
      const { url, breeds } = data[0];

      selectors.catInfo.innerHTML = `
      <img class="cat-image" src="${url}" alt="${breeds[0].name}" />
      <h2 class="breed">${breeds[0].name}</h2>
      <p class="description">${breeds[0].description}</p>
      <p class="temperament">
        <span>Temperament: </span>${breeds[0].temperament}
      </p>`;

      selectors.catInfo.classList.remove('is-hidden');
    })
    .catch(error => onError(error));
}

function onError() {
  selectors.select.classList.remove('is-hidden');
  selectors.loader.classList.add('is-hidden');

  Notify.failure('Oops! Something went wrong! Try reloading the page!', {
    width: '320px',
    position: 'center-top',
    fontSize: '16px',
  });
}
