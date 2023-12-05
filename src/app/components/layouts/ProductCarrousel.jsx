import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';

const ProductCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-x-auto">
      <Slider {...settings}>
        <div className="p-4 w-full">
          <div className="bg-gray-200 h-36 flex items-center justify-center">
            Product 1
          </div>
        </div>
        <div className="p-4">
          <div className="bg-gray-200 h-36 flex items-center justify-center">
            Product 2
          </div>
        </div>
        <div className="p-4">
          <div className="bg-gray-200 h-36 flex items-center justify-center">
            Product 3
          </div>
        </div>
        <div className="p-4">
          <div className="bg-gray-200 h-36 flex items-center justify-center">
            Product 4
          </div>
        </div>
        <div className="p-4">
          <div className="bg-gray-200 h-36 flex items-center justify-center">
            Product 5
          </div>
        </div>
        <div className="p-4">
          <div className="bg-gray-200 h-36 flex items-center justify-center">
            Product 6
          </div>
        </div>
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-4xl text-gray-500 z-10"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-4xl text-gray-500 z-10"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

export default ProductCarousel;
