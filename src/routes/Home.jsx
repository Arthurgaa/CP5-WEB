import React, { useState } from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Home = () => {


    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }

      const images = [
        'src/assets/img1.jpg', 
        'src/assets/img2.jpg',
        'src/assets/img3.jpg'
    ];
  

    return (
    
      <div className="slide-container">
        <Zoom scale={0.4}>
            {
            images.map((img, index) => <img key={index} style={{width: "100%"}} src={img} />)
            }
        </Zoom>
    </div>
    
       
    );
};

export default Home;

