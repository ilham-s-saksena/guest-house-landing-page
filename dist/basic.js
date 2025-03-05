// Menghindari redeclaration dengan menggunakan let
let images = [];

// Mengambil data dari JSON dan menyimpannya dalam array images
fetch('/source/data.json')
  .then(response => response.json())
  .then(data => {
    images = data.carousel;
  });

// Menghindari deklarasi ganda
let carouselSlide = document.getElementById('carousel'); // Gunakan let, bukan const
let imageIndex = 0; // Ganti nama variabel untuk menghindari konflik

function changeBackground() {
    carouselSlide.classList.add('fade-out');
    setTimeout(() => {
        imageIndex = (imageIndex + 1) % images.length;
        carouselSlide.style.backgroundImage = `url('${images[imageIndex]}')`;
        carouselSlide.classList.remove('fade-out');
    }, 400);
}

// Mengatur interval perubahan gambar setiap 3 detik
setInterval(changeBackground, 3000);

// Auto-scroll untuk kontainer scroll-container
let scrollContainer = document.getElementById('scroll-container'); // Gunakan let, bukan const
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
