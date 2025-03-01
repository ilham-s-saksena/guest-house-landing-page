document.addEventListener("DOMContentLoaded", function () {
    fetch('/source/data.json')
        .then(response => response.json())
        .then(data => {
            // icon
            const icon = document.getElementById("icon");
            icon.href = data.logo

            // logo
            const logo = document.getElementById("logo");
            logo.src = data.logo

            // title
            const title = document.getElementById("title");
            title.innerText = data.title

            // subtitle
            const subtitle = document.getElementById("subtitle");
            subtitle.innerText = data.subtitle

            // phone
            const phone = document.getElementById("phone");
            phone.innerText = data.phone

            // book-btn
            const message = `Halo, saya tertarik untuk memesan layanan Anda. Apakah layanan ini masih tersedia? Mohon informasinya lebih lanjut. Terima kasih!`;
            const waLink = `https://wa.me/${data.phone}?text=${encodeURIComponent(message)}`;
            const bookBtn = document.getElementById("book-btn");
            bookBtn.href = waLink
            const bookBtn2 = document.getElementById("book-btn-2");
            bookBtn2.href = waLink

            // cta-image
            const ctaImage = document.getElementById("ctaImage");
            ctaImage.style = `background-image: url('${data.ctaImage}')`

            // cta-image2
            const ctaImage2 = document.getElementById("ctaImage2");
            ctaImage2.style = `background-image: url('${data.ctaImage2}')`

            // cta-
            const ctaTitle = document.getElementById("ctaTitle");
            ctaTitle.innerText = data.ctaTitle

            // cta-
            const ctaSubtitle = document.getElementById("ctaSubtitle");
            ctaSubtitle.innerText = data.ctaSubtitle

            // cta-
            const ctaText = document.getElementById("ctaText");
            ctaText.innerText = data.ctaText

            const container = document.getElementById("scroll-container");
            data.slider.forEach(image => {
                const imgElement = document.createElement("img");
                imgElement.src = image;
                imgElement.alt = "";
                imgElement.className = "h-full w-auto rounded-lg";
                container.appendChild(imgElement);
            });

            const containerCarousel = document.getElementById("carousel-container");
            containerCarousel.innerHTML = "";

            data.slider.forEach((image, index) => {
                // Membuat elemen div untuk item carousel
                const carouselItem = document.createElement("div");
                carouselItem.className = `hidden duration-700 ease-in-out`;
                carouselItem.setAttribute("data-carousel-item", index === 0 ? "active" : "");

                // Membuat elemen img untuk setiap gambar slider
                const imgElement = document.createElement("img");
                imgElement.src = image;
                imgElement.alt = `Slide ${index + 1}`;
                imgElement.className = "absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2";

                // Menyusun elemen
                carouselItem.appendChild(imgElement);
                containerCarousel.appendChild(carouselItem);
            });


            const facilitiesContainer = document.getElementById("facilities");
            facilitiesContainer.innerHTML = "";
            data.facilities.forEach(facility => {
                // Membuat elemen list item untuk setiap fasilitas
                const listItem = document.createElement("li");
                listItem.className = "flex items-center justify-left space-x-4 text-primary-800";

                // Membuat kontainer ikon SVG
                const iconContainer = document.createElement("div");
                iconContainer.className = "p-2 border-2 border-primary-800 bg-primary-100 rounded-full";
                iconContainer.innerHTML = facility.svg;

                // Membuat elemen teks fasilitas
                const textElement = document.createElement("p");
                textElement.className = "font-bold text-lg";
                textElement.textContent = facility.text;

                // Menyusun elemen menjadi satu list item
                listItem.appendChild(iconContainer);
                listItem.appendChild(textElement);

                // Menambahkan list item ke dalam container
                facilitiesContainer.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
