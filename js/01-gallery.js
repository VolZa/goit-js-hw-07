import { galleryItems } from './gallery-items.js';

// import * as basicLightbox from 'basiclightbox';

// Change code below this line
const refs = {
    galleryEl: document.querySelector('.gallery'),
    galleryListEl: document.querySelector('.gallery__list'),
}
let creatGalleryPreview = ""; 
let creatGalleryOriginal = ""; 
for (let item of galleryItems) {
    creatGalleryPreview += (`<li><img src=${item.preview} alt="${item.description}" width="340"/></li>`)
}

refs.galleryListEl.insertAdjacentHTML('afterbegin', creatGalleryPreview);

refs.galleryListEl.addEventListener("click", vievFullImage);

function vievFullImage(ev) {
    // console.log(refs.galleryListEl.children);
    // console.log(ev.target.parentNode);
    if (ev.target.hasAttribute('alt')) {
        const altValue = ev.target.getAttribute("alt");
        console.log(ev.target);
        // console.log(altValue);
        for (const image of galleryItems) {
            if (image.description === altValue) {
                const bigImg = ev.target.getAttribute("src");
                console.log(bigImg);
                console.log(ev.target);
                ev.target.setAttribute("src", bigImg);
                
                const instance = basicLightbox.create(`
                <img src="${image.original}" width="1280">
                `);
                instance.show();
                break;
            }
        };

    }
    
 }


