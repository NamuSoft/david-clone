import Image from "next/image";
import React from "react";
import { CarouselAtom } from "~/components/Atoms/CarouselAtom/CarouselAtom";
import { TestimonialAtom } from "~/components/Atoms/TestimonialAtom/TestimonialAtom";
import styles from "./custom.module.css"; // Import the CSS module

type Props = {
  data: React.ComponentProps<typeof TestimonialAtom>[];
};

export const HomeTestimonial = (props: Props) => {
  const items = props.data.map((item, index) => (
    <TestimonialAtom {...item} key={index} />
  ));

  return (
    <>
      <div className={styles.container}>
        <CarouselAtom>{items}</CarouselAtom>
      </div>
      <div className={styles.arrowShape}>
        <Image
          className={styles.img}
          src={"/images/home/arrowf99d3f0a.png"}
          alt='arrow-shape'
          width={253}
          height={253}
          loading='lazy'
          style={{ color: "transparent" }}
        />
      </div>
    </>
  );
};
