import Image from "next/image";
import React from "react";
import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { MaskedImgAtom } from "~/components/Atoms/MaskedImgAtom/MaskedImgAtom";
import "./custom.css";
type Props = {
  // Add props here
  mask: string;
  img: string;
};

export const HomeVideo = (props: Props) => {
  return (
    <ContainerAtom>
      <MaskedImgAtom mask={props.mask} className='video-wrap'>
        <Image
          src={props.img}
          alt=''
          width={1296}
          height={735}
          className='imageParallax'
        />
        <button className='video-btn mx-auto cursor-pointer'>
          <Image
            alt=''
            src='/images/home/video-btn.png'
            width={87}
            height={70}
          ></Image>
        </button>
      </MaskedImgAtom>
    </ContainerAtom>
  );
};
