import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
}

//генерація розмітки
const galleryMarkup = createGalleryCardsMarkup(galleryItems);
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryCardsMarkup(imgs) {
    return imgs.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" onclick="event.preventDefault()" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    }).join('');
};

//Ініціалізація бібліотеки
const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});