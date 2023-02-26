import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const addGalleryItems = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", addGalleryItems);
galleryRef.addEventListener("click", onGalleryItemsClick);

function createGalleryItems(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onGalleryItemsClick(elements) {
  elements.preventDefault();
  if (!elements.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${elements.target.dataset.source}" width="1280" height="900">`
  );
  instance.show();

  galleryRef.addEventListener("keydown", (elements) => {
    if (elements.key === "Escape") {
      instance.close();
    }
    galleryRef.removeEventListener('keydown')
  });
}
