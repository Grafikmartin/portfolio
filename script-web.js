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
