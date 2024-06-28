import "./custom.css";
import Link from "next/link";
import { motion, useAnimation, type AnimationControls } from "framer-motion";
import { MaskedImgAtom } from "../MaskedImgAtom/MaskedImgAtom";
import { ResponsiveImgAtom } from "../ResponsiveImgAtom/ResponsiveImgAtom";

type Props = {
  url: string;
  text: string;
  mask: string;
  image: string;
};

export const FeatureItemAtom = (props: Props) => {

  const controls: AnimationControls = useAnimation();

  const handleMouseEnter = async () => {
    await controls.start({ opacity: 1 });
  };

  const handleMouseLeave = async () => {
    await controls.start({ opacity: 0 });
  };

  const handleMouseMove = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top; // y position within the element.
    await controls.start({ x, y });
  };

  return (
    <div className='features-items relative mx-auto flex w-full  flex-1 justify-center justify-self-center'>
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
            <ResponsiveImgAtom
              src={props.image}
              alt=''
              width={150}
              height={150}
            />
          </MaskedImgAtom>
        </motion.div>
      </Link>
    </div>
  );
};
