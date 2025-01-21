document.addEventListener("DOMContentLoaded", function () {
  // Slide handling
  const slideContainer = document.getElementById("slideContainer");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let currentIndex = 0;

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slideContainer.children.length - 1;
    }
    slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < slideContainer.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
});
