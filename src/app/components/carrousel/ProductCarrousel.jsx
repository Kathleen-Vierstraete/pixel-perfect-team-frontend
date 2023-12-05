import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductForCarrousel from './Product';



const ProductCarousel = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
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
        {
          products.map(product => (
            <ProductForCarrousel key={product.id} product={product} />
          ))
        }
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-24 right-4 transform -translate-y-1/2 cursor-pointer text-4xl text-gray-500 z-10"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-24 left-4 transform -translate-y-1/2 cursor-pointer text-4xl text-gray-500 z-10"
      onClick={onClick}
    >
      <IoIosArrowBack  />
    </div>
  );
};

export default ProductCarousel;
