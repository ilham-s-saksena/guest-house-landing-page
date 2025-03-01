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

            // cta-
            const priceTitle1 = document.getElementById("priceTitle1");
            priceTitle1.innerText = data.pricing[0].text

            // cta-
            const priceTitle2 = document.getElementById("priceTitle2");
            priceTitle2.innerText = data.pricing[1].text

            // cta-
            const priceTitle3 = document.getElementById("priceTitle3");
            priceTitle3.innerText = data.pricing[2].text

            // cta-
            const price1 = document.getElementById("price1");
            price1.innerText = data.pricing[0].price

            // cta-
            const price2 = document.getElementById("price2");
            price2.innerText = data.pricing[1].price

            // cta-
            const price3 = document.getElementById("price3");
            price3.innerText = data.pricing[2].price

            // cta-
            const about = document.getElementById("about");
            about.innerText = data.about

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

            const whyUsContainer = document.getElementById("whyUs");
            whyUsContainer.innerHTML = ""; // Kosongkan kontainer sebelumnya

            data.whyUs.forEach(item => {
                // Membuat elemen kontainer untuk setiap fitur Why Us
                const card = document.createElement("div");
                card.className = "bg-white p-6 rounded-lg shadow-md text-center";

                // Membuat elemen emoticon
                const emoticonElement = document.createElement("div");
                emoticonElement.className = "text-4xl mb-4";
                emoticonElement.textContent = item.emoticon;

                // Membuat elemen judul (title)
                const titleElement = document.createElement("h3");
                titleElement.className = "font-semibold text-lg text-gray-800";
                titleElement.textContent = item.title;

                // Membuat elemen teks deskripsi
                const textElement = document.createElement("p");
                textElement.className = "text-gray-600 text-sm";
                textElement.textContent = item.text;

                // Menyusun elemen menjadi satu card
                card.appendChild(emoticonElement);
                card.appendChild(titleElement);
                card.appendChild(textElement);

                // Menambahkan card ke dalam container utama
                whyUsContainer.appendChild(card);
            });


            const faqContainer = document.getElementById("accordion-collapse");
            faqContainer.innerHTML = ""; // Kosongkan kontainer sebelumnya

            data.faq.forEach((item, index) => {
                // Buat elemen pertanyaan FAQ
                const faqHeader = document.createElement("h2");
                faqHeader.id = `accordion-collapse-heading-${index + 1}`;

                const button = document.createElement("button");
                button.type = "button";
                button.className = "flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3";
                button.setAttribute("data-accordion-target", `#accordion-collapse-body-${index + 1}`);
                button.setAttribute("aria-expanded", "false");
                button.setAttribute("aria-controls", `accordion-collapse-body-${index + 1}`);
                
                const span = document.createElement("span");
                span.textContent = item.question;

                const svg = document.createElement("svg");
                svg.className = "w-3 h-3 rotate-180 shrink-0";
                svg.setAttribute("aria-hidden", "true");
                svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                svg.setAttribute("fill", "none");
                svg.setAttribute("viewBox", "0 0 10 6");
                svg.innerHTML = `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />`;

                button.appendChild(span);
                button.appendChild(svg);
                faqHeader.appendChild(button);

                // Buat elemen jawaban FAQ
                const faqBody = document.createElement("div");
                faqBody.id = `accordion-collapse-body-${index + 1}`;
                faqBody.className = "hidden";
                faqBody.setAttribute("aria-labelledby", faqHeader.id);

                const answerContainer = document.createElement("div");
                answerContainer.className = "p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900";

                const answerParagraph = document.createElement("p");
                answerParagraph.className = "mb-2 text-gray-500 dark:text-gray-400";
                answerParagraph.textContent = item.answer;

                if (item.linkText && item.linkUrl) {
                    const link = document.createElement("a");
                    link.href = item.linkUrl;
                    link.className = "text-blue-600 dark:text-blue-500 hover:underline";
                    link.textContent = item.linkText;

                    answerParagraph.appendChild(link);
                }

                answerContainer.appendChild(answerParagraph);
                faqBody.appendChild(answerContainer);

                // Gabungkan semua elemen ke dalam kontainer utama
                faqContainer.appendChild(faqHeader);
                faqContainer.appendChild(faqBody);
            });

            const form = document.getElementById("checkForm");

            form.addEventListener("submit", function (e) {
                e.preventDefault(); // Mencegah form submit default

                // Mengambil data dari form
                const roomType = form.querySelector('select[name="roomType"]').value;
                const person = form.querySelector('select[name="person"]').value;
                const checkIn = form.querySelector('input[name="checkIn"]').value;
                const checkOut = form.querySelector('input[name="checkOut"]').value;

                // Nomor WhatsApp tujuan (format internasional tanpa tanda + atau spasi)
                const phoneNumber = data.phone; 

                // Buat pesan otomatis untuk WhatsApp
        const message = `Halo, saya ingin memesan guest house Anda dengan rincian berikut:
- Room Type: ${roomType}
- Person: ${person}
- Check-In: ${checkIn}
- Check-Out: ${checkOut}

Mohon informasi lebih lanjut mengenai ketersediaan dan harganya. Terima kasih!`;

                // Buat link WhatsApp dengan pesan otomatis
                const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

                // Redirect ke WhatsApp
                window.open(waLink, '_blank');
            });
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
