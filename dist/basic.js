const images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg'
  ];
  const carousel = document.getElementById('carousel');
  let currentIndex = 0;

  function changeBackground() {
    carousel.classList.add('fade-out');
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      carousel.style.backgroundImage = `url('${images[currentIndex]}')`;
      carousel.classList.remove('fade-out');
    }, 400);
  }
  setInterval(changeBackground, 3000);

  const scrollContainer = document.getElementById('scroll-container');
  scrollContainer.innerHTML += scrollContainer.innerHTML;
  let scrollAmount = 0;
  function autoScroll() {
    scrollAmount += 1;
    scrollContainer.scrollLeft = scrollAmount;
    if (scrollAmount >= scrollContainer.scrollWidth / 2) {
      scrollAmount = 0;
    }
    requestAnimationFrame(autoScroll);
  }
  autoScroll();