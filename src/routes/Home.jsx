import React, { useEffect, useRef } from 'react';
import { initSlideshow, destroySlideshow } from '../js/Slideshow'; // Caminho para o Slideshow.js
import '../css/Slideshow.css'; // Caminho para o Slideshow.css

const Home = () => {
    const containerRef = useRef(null); // Referência para o contêiner do slideshow

    useEffect(() => {
        if (containerRef.current) {
            initSlideshow(containerRef.current); // Inicializa o slideshow no contêiner
        }

        return () => {
            // Função de limpeza ao desmontar o componente
            destroySlideshow();
        };
    }, []);

    return (
        <div>
            <div className="slideshow-container" ref={containerRef}>
                {/* O slideshow será inicializado aqui */}
            </div>
        </div>
    );
};

export default Home;


