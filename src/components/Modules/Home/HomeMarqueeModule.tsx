import Image from "next/image";
import React from "react";
import {MarqueeAtom} from "~/components/Atoms/MarqueeAtom/MarqueeAtom";
// import styles from "./HomeModule.module.css";

// HomeHeroModule functional component
export const HomeMarqueeModule: React.FC = () => {
  const StarImg = (
    // <div className='relative'>
      <Image
        alt='Star'
        src='/images/star.png'
        width={118}
        height={119}
      loading='lazy'
      className="max-w-[118px] max-h-[119px] "
    />
    
    // </div>
  );

  return (
    <MarqueeAtom>
      <h1
        className={`h1Marquee flex flex-row space-x-10 items-center align-middle text-white uppercase`}
      >
        <span>Creative</span>
        {StarImg}
        <span>Design</span>
        {StarImg}
        <span>UX</span>
        {StarImg}
        <span>Web</span>
        {StarImg}
        <span>Development</span>
        {StarImg}
      </h1>
    </MarqueeAtom>
  );
};

export default HomeMarqueeModule;
