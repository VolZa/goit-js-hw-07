import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

let creatGalleryPreview = ""; 
galleryItems.forEach(item => {
    creatGalleryPreview +=
    (`<a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"
            style="dissplay:block; object-fit: cover; height=100%;"src=${item.preview} alt="${item.description}" width="340" />
        </a>
   `)
});
// console.log(galleryItems);

// Add code to DOM here
galleryEl.insertAdjacentHTML('beforeend', creatGalleryPreview);

// Create an object for viewing full-size images with a 250ms delay option
new SimpleLightbox('.gallery a', { captionDelay: 250, });