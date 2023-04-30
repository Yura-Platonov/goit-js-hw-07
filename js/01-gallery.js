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
        return `<div class="gallery__item">
            <a class="gallery__link" onclick="event.preventDefault()" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    }).join('');
};

//клік по фото
refs.gallery.addEventListener('click', clickOnPhoto);

function clickOnPhoto(e) {
    if (e.target.nodeName !== 'IMG') {
        return;
    } 
    
    const createModal = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `, {
        onClose: (createModal) => {
            window.removeEventListener('keydown', createModalOnEscKeyPressModal);
        }
    })
    const createModalOnEscKeyPressModal = onEscKeyPress.bind(createModal);
    window.addEventListener('keydown', createModalOnEscKeyPressModal);
    createModal.show();
}

function onEscKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;
    if (isEscKey) {
        this.close();
    } 
};