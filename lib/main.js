document.addEventListener("DOMContentLoaded", function () {
    fetch('/source/data.json')
        .then(response => response.json())
        .then(data => {
            // icon
            const icon = document.getElementById("icon");
            icon.href = data.logo

            // title
            const title = document.getElementById("title");
            title.innerText = data.title

            // phone
            const phone2 = document.getElementById("phone2");
            phone2.innerText = data.phone

            // cta-image
            const ctaImage = document.getElementById("ctaImage");
            ctaImage.style = `background-image: url('${data.ctaImage}')`

            // cta-
            const ctaTitle = document.getElementById("ctaTitle");
            ctaTitle.innerText = data.ctaTitle

            // cta-
            const ctaText = document.getElementById("ctaText");
            ctaText.innerText = data.ctaText

            // cta-
            const priceTitle1 = document.getElementById("priceTitle1");
            priceTitle1.innerText = data.pricing[0].text

            // cta-
            const priceTitle2 = document.getElementById("priceTitle2");
            priceTitle2.innerText = data.pricing[1].text

            // cta-
            const priceTitle3 = document.getElementById("priceTitle3");
            priceTitle3.innerText = data.pricing[2].text

            // Price
            const price1 = document.getElementById("price1");
            price1.innerText = data.pricing[0].price
            if (data.pricing[0].normalPrice != null) {
                const normalPrice1 = document.getElementById("normalPrice1");
                normalPrice1.innerText = data.pricing[0].normalPrice
            }

            const price2 = document.getElementById("price2");
            price2.innerText = data.pricing[1].price
            if (data.pricing[1].normalPrice != null) {
                const normalPrice2 = document.getElementById("normalPrice2");
                normalPrice2.innerText = data.pricing[1].normalPrice
            }

            const price3 = document.getElementById("price3");
            price3.innerText = data.pricing[2].price
            if (data.pricing[2].normalPrice != null) {
                const normalPrice3 = document.getElementById("normalPrice3");
                normalPrice3.innerText = data.pricing[2].normalPrice
            }

            

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
                const carouselItem = document.createElement("div");
                carouselItem.className = `hidden duration-700 ease-in-out`;
                carouselItem.setAttribute("data-carousel-item", index === 0 ? "active" : "");

                const imgElement = document.createElement("img");
                imgElement.src = image;
                imgElement.alt = `Slide ${index + 1}`;
                imgElement.className = "absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2";

                carouselItem.appendChild(imgElement);
                containerCarousel.appendChild(carouselItem);
            });


            const facilitiesContainer = document.getElementById("facilities");
            facilitiesContainer.innerHTML = "";
            data.facilities.forEach(facility => {
                const listItem = document.createElement("li");
                listItem.className = "flex items-center justify-left space-x-4 text-primary-800";

                const iconContainer = document.createElement("div");
                iconContainer.className = "p-2 border-2 border-primary-800 bg-primary-100 rounded-full";
                iconContainer.innerHTML = facility.svg;

                const textElement = document.createElement("p");
                textElement.className = "font-bold text-md";
                textElement.textContent = facility.text;

                listItem.appendChild(iconContainer);
                listItem.appendChild(textElement);

                facilitiesContainer.appendChild(listItem);
            });

            const whyUsContainer = document.getElementById("whyUs");
            whyUsContainer.innerHTML = "";

            data.whyUs.forEach(item => {
                const card = document.createElement("div");
                card.className = "bg-white p-6 rounded-lg shadow-md text-center";

                const emoticonElement = document.createElement("div");
                emoticonElement.className = "text-4xl mb-4";
                emoticonElement.textContent = item.emoticon;

                const titleElement = document.createElement("h3");
                titleElement.className = "font-semibold text-lg text-gray-800";
                titleElement.textContent = item.title;

                const textElement = document.createElement("p");
                textElement.className = "text-gray-600 text-sm";
                textElement.textContent = item.text;

                card.appendChild(emoticonElement);
                card.appendChild(titleElement);
                card.appendChild(textElement);

                whyUsContainer.appendChild(card);
            });

            const form = document.getElementById("checkForm");

            form.addEventListener("submit", function (e) {
                e.preventDefault();

                // Mengambil data dari form
                const roomType = form.querySelector('select[name="roomType"]').value;
                const person = form.querySelector('select[name="person"]').value;
                const checkIn = form.querySelector('input[name="checkIn"]').value;
                const checkOut = form.querySelector('input[name="checkOut"]').value;

                const phoneNumber = data.phone; 

        const message = `Halo, saya ingin memesan guest house Anda dengan rincian berikut:
- Room Type: ${roomType}
- Person: ${person}
- Check-In: ${checkIn}
- Check-Out: ${checkOut}

Mohon informasi lebih lanjut mengenai ketersediaan dan harganya. Terima kasih!`;

                // Buat link WhatsApp dengan pesan otomatis
                const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(waLink, '_blank');
            });
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
