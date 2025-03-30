import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, 
  };
  return (
    <div className="">
      <Slider {...settings} className="h-full">
        <div className="md:h-[550px] object-cover h-[170px]">
          <img className="border w-[95%] mx-auto object-cover" src="https://i.ibb.co.com/jZkqJstM/c802a977-cb18-44b7-ba3c-40016c66dc79.jpg" alt="" />
        </div>
        <div className="md:h-[550px] h-[170px]">
          <img className="border w-[95%] mx-auto" src="https://cdn1.vectorstock.com/i/1000x1000/75/65/red-banner-ribbon-and-label-on-white-background-vector-14307565.jpg" alt="" />
        </div>
        <div className="md:h-[550px] h-[170px]">
          <img className="border w-[95%] mx-auto" src="https://cdn5.vectorstock.com/i/1000x1000/34/39/red-banner-design-on-white-background-vector-41743439.jpg" alt="" />
        </div>
        <div className="md:h-[550px] h-[170px]">
          <img className="border w-[95%] mx-auto" src="https://cdn.vectorstock.com/i/1000v/52/59/modern-banner-background-vector-845259.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
