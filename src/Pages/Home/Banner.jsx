// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// const Banner = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 3000, 
//   };
//   return (
//     <div className="">
//       <Slider {...settings} className="h-full">
//         <div className="md:h-[550px] object-cover h-[170px]">
//           <img className="border w-[95%] mx-auto object-cover" src="https://i.ibb.co.com/jZkqJstM/c802a977-cb18-44b7-ba3c-40016c66dc79.jpg" alt="" />
//         </div>
//         <div className="md:h-[550px] h-[170px]">
//           <img className="border w-[95%] mx-auto" src="https://i.ibb.co.com/PZP2GjPh/banner-image-1-1.jpg" alt="" />
//         </div>
//         <div className="md:h-[550px] h-[170px]">
//           <img className="border w-[95%] mx-auto" src="https://cdn5.vectorstock.com/i/1000x1000/34/39/red-banner-design-on-white-background-vector-41743439.jpg" alt="" />
//         </div>
//         <div className="md:h-[550px] h-[170px]">
//           <img className="border w-[95%] mx-auto" src="https://cdn.vectorstock.com/i/1000v/52/59/modern-banner-background-vector-845259.jpg" alt="" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Banner;

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <Carousel autoPlay className='pt-8'>
                <div>
                    <img className="max-h-[650px]  object-cover" src='https://i.ibb.co.com/jZkqJstM/c802a977-cb18-44b7-ba3c-40016c66dc79.jpg' />
                </div>
                <div>
                    <img className="max-h-[650px] object-cover" src="https://i.ibb.co.com/PZP2GjPh/banner-image-1-1.jpg" />
                </div>
                <div>
                    <img className="max-h-[650px] object-cover" src="https://i.ibb.co.com/DfD9p7nX/Whats-App-Image-2025-03-30-at-13-58-45-65ac7ab2.jpg" />
                </div>
                <div className=''>
                    <img className="max-h-[650px] object-cover" src="https://i.ibb.co.com/67WGrBm2/Whats-App-Image-2025-03-30-at-13-58-46-737fe021.jpg" />
                </div>
              
            </Carousel>
    );
};

export default Banner;
// change this section