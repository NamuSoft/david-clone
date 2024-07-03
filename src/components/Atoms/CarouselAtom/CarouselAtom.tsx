import { Carousel } from "antd";
import type { PropsWithChildren } from "react";

type Props = {
  // Add props here
};

export const CarouselAtom = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <Carousel autoplay arrows={false} dots={false}>
        {props.children}
      </Carousel>
    </>
  );
};