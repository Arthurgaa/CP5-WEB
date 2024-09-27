const images = [
    '/imagem1.jpg', 
    '/imagem2.jpg',
    '/imagem3.jpg'
];

let slideIndex = 0;
let intervalId;

function initSlideshow(container) {
    // Cria os slides e adiciona ao contêiner
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${image}" alt="Imagem ${index + 1}">`;
        container.appendChild(slide);
    });

    const slides = container.getElementsByClassName('slide');

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndex].style.display = 'block';
        slideIndex = (slideIndex + 1) % slides.length;
    }

    showSlides();
    intervalId = setInterval(showSlides, 3000);
}

function destroySlideshow() {
    clearInterval(intervalId); // Limpa o intervalo ao desmontar
}

export { initSlideshow, destroySlideshow };

