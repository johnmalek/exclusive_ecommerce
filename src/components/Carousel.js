import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="carousel-contaner">
            <Slider {...settings}>
                <div>
                    <img src="./src/img/image1.jpg" alt="slide 1"/>
                </div>
                <div>
                    <img src="./src/img/image2.jpg" alt="slide 2"/>
                </div>
                <div>
                    <img src="./src/img/image3.jpg" alt="slide 3"/>
                </div>
                <div>
                    <img src="./src/img/image4.jpg" alt="slide 4"/>
                </div>
                <div>
                    <img src="./src/img/image5.jpg" alt="slide 5"/>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;