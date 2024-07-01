import Slider from "react-slick";
import "./custom.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";


export type Break = {
  breakpoint: number;
  settings: {
    slidesToShow?: number;
    slidesToScroll?: number;
    infinite?: boolean;
    dots?: boolean;
    initialSlide?: number;
  };
}[];

type Props = {
  children: React.ReactNode;
  className?: string;
  noarrows?: boolean;
  autoplay?: boolean;
  show?: number;
  responsive?: Break;
};

export const SliderAtom = (props: Props) => {
  const settings = {
    useTransform: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: props.show ?? 4,
    slidesToScroll: 1,
    arrows: !props.noarrows,
    prevArrow: !props.noarrows ? <PrevArrow /> : undefined,
    nextArrow: !props.noarrows ? <NextArrow /> : undefined,
    autoplay: props.autoplay,
    cssEase: "ease-out",
    autoplaySpeed: 4000,
    responsive: props.responsive ?? [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={props.className}>
      {props.children}
    </Slider>
  );
};

