// Slideshow.jsx
import React, { useEffect, useRef } from 'react';
import { initSlideshow } from './Slideshow'; // Importa a função do slideshow

const Slideshow = () => {
    const containerRef = useRef(null); // Referência para o contêiner do slideshow

    useEffect(() => {
        if (containerRef.current) {
            initSlideshow(containerRef.current); // Inicializa o slideshow no contêiner
        }
    }, []);

    return (
        <div className="slideshow-container" ref={containerRef}>
            {/* O slideshow será inicializado aqui */}
        </div>
    );
};

export default Slideshow;
