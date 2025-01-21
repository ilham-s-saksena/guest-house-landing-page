document.addEventListener("DOMContentLoaded", function () {
  // AOS (Animate On Scroll) handling
  const elements = document.querySelectorAll('[data-aos="fade-up"]');

  function handleScroll() {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) {
        element.classList.add("aos-out");
      } else {
        element.classList.remove("aos-out");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

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
  // Remove data-aos attributes on mobile
  if (window.innerWidth <= 768) {
    const aosElements = document.querySelectorAll("[data-aos]");
    aosElements.forEach((element) => {
      element.removeAttribute("data-aos");
      element.removeAttribute("data-aos-anchor-placement");
    });
  }
});
function initMap() {
  const location = { lat: -34.397, lng: 150.644 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: location
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
