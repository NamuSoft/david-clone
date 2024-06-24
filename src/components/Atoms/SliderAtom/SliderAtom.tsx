import React from "react";
import Slider from "react-slick";
import "./custom.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const SliderAtom = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow:<NextArrow/>
  };

  return (
    <>
      <Slider {...settings} className=''>
        {/* Render children directly */}
        {props.children}
      </Slider>
    </>
  );
};
