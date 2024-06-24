import { Carousel } from "antd";
import {type ReactNode } from "react";

type Props = {
  // Add props here
  children:ReactNode
    };

export const CarouselAtom = (props: Props) => {
  return (
    <>
      <Carousel autoplay arrows={false} dots={false}>
        {props.children}
        </Carousel>
    </>
  );
};