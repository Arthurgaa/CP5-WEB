// Slideshow.js
const images = [
    '/imagem1.jpg', // Caminho relativo à pasta public
    '/imagem2.jpg',
    '/imagem3.jpg'
];

let slideIndex = 0;

function initSlideshow(container) {
    // Cria os slides e adiciona ao contêiner
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${image}" alt="Imagem ${index + 1}">`;
        container.appendChild(slide);
    });

    function showSlides() {
        const slides = container.getElementsByClassName('slide');

        // Verifica se há slides disponíveis
        if (slides.length === 0) return;

        // Esconde todos os slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none'; // Oculta todos os slides
        }

        // Mostra o slide atual
        slides[slideIndex].style.display = 'block';
        slideIndex = (slideIndex + 1) % slides.length; // Vai para o próximo slide

        setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
    }

    // Adiciona o estilo CSS ao documento
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        html, body {
            width: 100%;
            height: 100%;
        }
        body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .slideshow-container {
            flex-grow: 1; /* O slideshow ocupará o espaço restante */
            position: relative;
            width: 100%; /* Ocupa toda a largura disponível */
            height: 100vh; /* Define a altura para 100% da tela */
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .slide {
            display: none;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Ajusta a imagem para cobrir toda a tela sem distorcer */
            object-position: center; /* Centraliza a imagem na área */
        }
        @keyframes fade {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    showSlides(); // Inicia o slideshow
}

export { initSlideshow };
