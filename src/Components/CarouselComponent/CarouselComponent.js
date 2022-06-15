import React from 'react';
import { Carousel } from 'react-responsive-carousel';

//Carousel CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselComponent.css"

import slider1 from "../../img/slider/slider1.jpg";
import slider2 from "../../img/slider/slider2.jpg";
import slider3 from "../../img/slider/slider3.jpg";
import slider4 from "../../img/slider/slider4.jpg";

const CarouselComponent = () => {
  return (
    <div className="carousel-wrapper">
        <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} interval={3000} transitionTime={450} animationHandler="fade" className="main-slide">
            <div>
                <img src={slider1} alt="the grunyons at Spring Sing" />
            </div>
            <div>
                <img src={slider2} alt="the grunyons at Spring Sing" />
            </div>
            <div>
                <img src={slider3} alt="the grunyons at Spring Sing" />
            </div>
            <div>
                <img src={slider4} alt="the grunyons at Spring Sing" />
            </div>
        </Carousel>
    </div>
  )
}

export default CarouselComponent