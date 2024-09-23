// slideshow.js
const images = [
    'imagem1.jpg',
    'imagem2.jpg',
    'imagem3.jpg'
];

let slideIndex = 0;

function initSlideshow(container) {
    function showSlides() {
        container.innerHTML = ''; // Limpa o contêiner

        images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            if (index === slideIndex) {
                slide.classList.add('fade');
            }
            slide.innerHTML = `<img src="${image}" alt="Imagem ${index + 1}">`;
            container.appendChild(slide);
        });

        slideIndex = (slideIndex + 1) % images.length;
        setTimeout(() => showSlides(), 3000); // Muda a imagem a cada 3 segundos
    }

    // Adiciona o estilo CSS ao documento
    const style = document.createElement('style');
    style.innerHTML = `
        .slideshow-container {
            position: relative;
            max-width: 600px;
            margin: auto;
            overflow: hidden;
        }
        .slide {
            display: none;
        }
        img {
            width: 100%;
            height: auto;
        }
        .fade {
            animation: fade 1.5s ease;
            display: block;
        }
        @keyframes fade {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    showSlides(); // Inicia o slideshow
}

// Exporta a função
export { initSlideshow };

