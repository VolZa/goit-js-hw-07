import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryEl = document.querySelector('.gallery');

let creatGalleryPreview = ""; 

galleryItems.forEach(item => {
    creatGalleryPreview +=
    (`<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" data-source = "${item.original}" src="${item.preview}"
            alt="${item.description}" style="dissplay:block; object-fit: cover; height=100%;"src=${item.preview} alt="${item.description}" width="340" />
        </a>
    </div>`)
});

// Add code to DOM here
galleryEl.insertAdjacentHTML('beforeend', creatGalleryPreview);

// Add a listener to a gallery item
galleryEl.addEventListener("click", vievFullImage);

function vievFullImage(ev) {
    // Override the default behavior
    ev.preventDefault();

    // checking whether the click was on the image
    if (ev.target.nodeName !== "IMG") {
        return;
    }

    const imgSelected = ev.target.getAttribute("data-source");

    const instance = basicLightbox.create(`<img src="${imgSelected}" width="1280">`);
    instance.show();

    //Close the modal window with the ESC key
    function closeModal(ev) {
        if (ev.code === 'Escape') {
            instance.close();
            document.removeEventListener("keydown", closeModal);
        }
    }
    document.addEventListener("keydown", closeModal);  
 }
