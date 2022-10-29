import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// https://github.com/jokercs/goit-js-hw-07

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



