// друга спроба

import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

function createGalleryMarcap(arry) {
  return arry
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item"> <a class="gallery__link" href="${original}">
 		<img class="gallery__image" src="${preview}" data-source="${original}"
 		alt="${description}"/></a></div> `;
    })
    .join("");
}

galleryRef.insertAdjacentHTML("beforeend", createGalleryMarcap(galleryItems));
galleryRef.addEventListener("click", onClickImage);

function onClickImage(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
		<img src=${evt.target.dataset.source} 
		alt=${evt.target.alt}
		width="1280">		
	`,
    {
      onShow: () => {
        galleryRef.addEventListener("keydown", onEscapeKeyPress);
      },
      onClose: () => {
        galleryRef.addEventListener("keydown", onEscapeKeyPress);
      },
    }
  );
  instance.show();

  function onEscapeKeyPress(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
  galleryRef.addEventListener("keydown", onEscapeKeyPress);
}

// Перша спроба

// import { galleryItems } from './gallery-items.js';

// const refs = {
// 	galleryRef: document.querySelector('.gallery'),
// };

// refs.galleryRef.addEventListener('click', onClickGalleryItem);

// function addgaleryItemsMarkup(itemsArr) {
// 	return itemsArr
// 		.map(({ original, preview, description }) => {
// 			return `<div class="gallery__item"> <a class="gallery__link" href="${original}">
// 		<img class="gallery__image" src="${preview}" data-source="${original}"
// 			alt="${description}"/></a></div> `;
// 		})
// 		.join('');
// }

// refs.galleryRef.insertAdjacentHTML(
// 	'beforeend',
// 	addgaleryItemsMarkup(galleryItems)
// );

// function onClickGalleryItem(evt) {
// 	evt.preventDefault();
// 	if (evt.target.nodeName !== 'IMG') {
// 		return;
// 	}
// 	const originalImgEl = basicLightbox.create(`
// 	<div class="modal">
//     	<img src="${evt.target.dataset.source}" width="1280">
// 	</div>
// `);
// 	originalImgEl.show();

// 	refs.galleryRef.addEventListener('keydown', evt => {
// 		if (evt.code === 'Escape') {
// 			originalImgEl.close();
// 		}
// 	});
// };
