import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryEl = document.querySelector('.gallery');

let creatGalleryPreview = ""; 


// for (let item of galleryItems) {
//     creatGalleryPreview +=
//     (`<li><img style="dissplay:block; object-fit: cover; height=100%;"src=${item.preview} alt="${item.description}" width="340" /></li>`)
// }

galleryItems.forEach(item => {
    creatGalleryPreview +=
    (`<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}"
            style="dissplay:block; object-fit: cover; height=100%;"src=${item.preview} alt="${item.description}" width="340" />
        </a>
    </div>`)
});

// Add code to DOM here
galleryEl.insertAdjacentHTML('beforeend', creatGalleryPreview);

// Add a listener to a gallery item
galleryEl.addEventListener("click", vievFullImage);

// galleryEl.style.display = 'flex';
// galleryEl.style.flexWrap = 'wrap';
// galleryEl.style.gap = '10px';
// galleryEl.style.listStyle = 'none';
// galleryEl.style.cursor = 'zoom-in';
// galleryEl.style.cursor.borderColor = 'read';

// refs.galleryEl.children[0].children[0].src
// console.log(`refs.galleryListEl.style = ${refs.galleryEl.children[0].children[0].src}`);





function vievFullImage(ev) {
    // Override the default behavior
    ev.preventDefault();

    // checking whether the click was on the image
    if (ev.target.nodeName !== "IMG") {
        return;
    }
    



    // get the value of the alt attribute  for the clicked element 
    let altValue = ev.target.getAttribute("alt");

    for (const image of galleryItems) {
        if (image.description === altValue) {
            const bigImg = image.original;               
            
            const instance = basicLightbox.create(`
            <img src="${bigImg}" width="1280">
            `);

            instance.show();
            function closeModal(ev) {
                if (ev.code === 'Escape') {
                    instance.close();
                    document.removeEventListener("keydown", closeModal);
                }
            }
            document.addEventListener("keydown", closeModal);
            break;
        }
    };   
 }
