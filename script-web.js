document.querySelectorAll(".slider-img").forEach((img) => {
  img.addEventListener("click", () => {
    const mainImage = document.getElementById("main-image");
    mainImage.src = img.src;
  });
});

const sliderImagesContainer = document.querySelector(".slider-images");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const sliderImages = document.querySelectorAll(".slider-img");

let currentIndex = 0;
const maxIndex = sliderImages.length - 1;

function updateSliderPosition() {
  sliderImagesContainer.style.transform = `translateX(-${currentIndex * 26}vh)`;
}

// Steuerung der Buttons
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) currentIndex--;
  updateSliderPosition();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex) currentIndex++;
  updateSliderPosition();
});

// Hauptbild, Titel und Beschreibung
document.addEventListener("DOMContentLoaded", () => {
  // Hauptbild, Titel und Beschreibung
  const mainImage = document.getElementById("main-image");
  const imageTitle = document.getElementById("image-title");
  const imageDescription = document.getElementById("image-description");
  const sliderImages = document.querySelectorAll(".slider-img");

  // Debugging: Überprüfen, ob die Elemente gefunden werden
  console.log("Hauptbild:", mainImage);
  console.log("Titel:", imageTitle);
  console.log("Beschreibung:", imageDescription);
  console.log("Slider-Bilder:", sliderImages);

  // Beim Klick auf ein Bild im Slider
  sliderImages.forEach((img) => {
    console.log("Bild gefunden:", img); // Debugging: Bild gefunden
    img.addEventListener("click", () => {
      console.log("Geklicktes Bild:", img.src); // Debugging: Bild geklickt

      // Hauptbild aktualisieren
      mainImage.src = img.src;

      // Titel und Beschreibung aus den Datenattributen des Bildes
      console.log("Title:", img.dataset.title); // Debugging: Titel prüfen
      console.log("Description:", img.dataset.description); // Debugging: Beschreibung prüfen

      imageTitle.textContent = img.dataset.title || "Kein Titel verfügbar";
      imageDescription.textContent = img.dataset.description || "Keine Beschreibung verfügbar";
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("main-image");
  const imageTitle = document.getElementById("image-title");
  const imageDescription = document.getElementById("image-description");
  const imageLink = document.getElementById("image-link");
  const sliderImages = document.querySelectorAll(".slider-img");

  sliderImages.forEach((img) => {
    img.addEventListener("click", () => {
      mainImage.src = img.src;
      imageTitle.textContent = img.dataset.title;
      imageDescription.textContent = img.dataset.description;

      if (img.dataset.url) {
        imageLink.setAttribute("data-url", img.dataset.url); // URL im Button speichern
        imageLink.style.display = "inline-block"; // Button anzeigen
      } else {
        imageLink.style.display = "none"; // Button verstecken
      }
    });
  });

  // Klick auf den Button
  imageLink.addEventListener("click", () => {
    const url = imageLink.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank"); // Öffne die URL in einem neuen Tab
    }
  });
});