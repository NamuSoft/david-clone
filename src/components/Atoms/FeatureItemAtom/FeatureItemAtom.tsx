import "./custom.css";
import Link from "next/link";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { useState } from "react";
import { MaskedImgAtom } from "../MaskedImgAtom/MaskedImgAtom";
import Image from "next/image";

type Props = {
  url: string;
  text: string;
  mask: string;
  image: string;
};

export const FeatureItemAtom = (props: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const controls: AnimationControls = useAnimation();

  const handleMouseEnter = async () => {
    setIsHovered(true);
    await controls.start({ opacity: 1 });
  };

  const handleMouseLeave = async () => {
    setIsHovered(false);
    await controls.start({ opacity: 0 });
  };

  const handleMouseMove = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top; // y position within the element.
    setMousePosition({ x, y });
    await controls.start({ x, y });
  };

  return (
    <div className='relative flex features-items mx-auto w-full  justify-self-center justify-center flex-1'>
      <Link
        href={props.url}
        className='features-item  italiana-regular'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ position: "relative", display: "inline-block" }}
      >
        {props.text}
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          style={{
            position: "absolute",
            top: 0,
            left: 0,

          }}
          className='features-masking'
        >
          <MaskedImgAtom mask={props.mask}>
            <Image src={props.image} alt='' width={150} height={150} />
          </MaskedImgAtom>
        </motion.div>
      </Link>
    </div>
  );
};
