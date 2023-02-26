import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const addGalleryItems = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", addGalleryItems);
galleryRef.addEventListener("click", onGalleryItemsClick);

function createGalleryItems(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join("");
}

function onGalleryItemsClick(elements) {
  elements.preventDefault();
  if (!elements.target.classList.contains("gallery__image")) {
    return;
  }

  const options = {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250, //Відобразити подання
  };

  const lightbox = new SimpleLightbox(".gallery a", options);
  lightbox.on("show.simplelightbox");
}
