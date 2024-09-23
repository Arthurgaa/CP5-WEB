// Slideshow.jsx
import React, { useEffect } from 'react';
import { initSlideshow } from './Slideshow'; // Importa a função do slideshow

const Slideshow = () => {
    useEffect(() => {
        const container = document.createElement('div');
        container.id = 'slideshow-container';
        document.body.appendChild(container);
        initSlideshow(container); // Chama a função com o contêiner

        // Limpeza: Remove o contêiner ao desmontar o componente
        return () => {
            document.body.removeChild(container);
        };
    }, []);

    return null; // Não renderiza nada, o slideshow é gerado no body
};

export default Slideshow;