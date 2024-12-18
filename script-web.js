document.addEventListener("DOMContentLoaded", () => {
    const sliderImages = document.querySelectorAll(".slider-img");
    const mainImage = document.getElementById("main-image");
    const slider = document.querySelector(".slider-images");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
  
    let currentIndex = 0; // Startposition
    const imageWidth = 26; // 25vh Bildbreite + 1vh Margin
  
    // Bilder klonen für nahtlosen Übergang
    const firstClone = sliderImages[0].cloneNode(true);
    const lastClone = sliderImages[sliderImages.length - 1].cloneNode(true);
  
    slider.appendChild(firstClone); // Klon am Ende
    slider.prepend(lastClone); // Klon am Anfang
  
    // Initiale Position setzen
    slider.style.transform = `translateX(-${currentIndex * imageWidth}vh)`;
  
    // Funktion zum Aktualisieren der Slider-Position
    const updateSliderPosition = () => {
      slider.style.transition = "transform 0.5s ease-in-out"; // Animation aktivieren
      slider.style.transform = `translateX(-${currentIndex * imageWidth}vh)`;
    };
  
    // Übergänge ohne sichtbare Sprünge
    const checkInfiniteScroll = () => {
      const images = document.querySelectorAll(".slider-img");
      if (images[currentIndex] === firstClone) {
        slider.style.transition = "none"; // Animation deaktivieren
        currentIndex = 1; // Springe zum ersten echten Bild
        slider.style.transform = `translateX(-${currentIndex * imageWidth}vh)`;
      }
      if (images[currentIndex] === lastClone) {
        slider.style.transition = "none"; // Animation deaktivieren
        currentIndex = sliderImages.length - 2; // Springe zum letzten echten Bild
        slider.style.transform = `translateX(-${currentIndex * imageWidth}vh)`;
      }
    };
  
    // Vorwärts bewegen
    nextBtn.addEventListener("click", () => {
      currentIndex++;
      updateSliderPosition();
    });
  
    // Rückwärts bewegen
    prevBtn.addEventListener("click", () => {
      currentIndex--;
      updateSliderPosition();
    });
  
    // Überprüfen, ob ein Sprung notwendig ist
    slider.addEventListener("transitionend", checkInfiniteScroll);
  
    // Set the main image when a slider image is clicked
    sliderImages.forEach((image) => {
      image.addEventListener("click", () => {
        mainImage.src = image.src; // Set the clicked image as the main image
      });
    });
  });
  