import { getImage } from './js/pixabay-api';

import { imgTemplate } from './js/rebder-functions';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formEl: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loadElem: document.querySelector('.loader'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  showLoader();
  const query = refs.formEl.elements.searchImages.value.trim();

  if (!query.length) {
    iziToast.error({
      color: 'yellow',
      message: ` Please fill in the field for search query.`,
      position: 'topRight',
    });

    // setGallery.innerHTML = '';
  }

  getImage(query).then(data => {
    if (!data.hits.length) {
      refs.gallery.innerHTML = '';

      iziToast.error({
        color: 'red',

        message: `❌ Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
    }

    const markup = imgTemplate(data.hits);

    refs.gallery.innerHTML = markup;

    hideLoader();

    let simplGallery = new SimpleLightbox('.gallery a');
    simplGallery.refresh();

    refs.formEl.reset();
  });
});

function showLoader() {
  refs.loadElem.classList.remove('hidden');
}
function hideLoader() {
  refs.loadElem.classList.add('hidden');
}
