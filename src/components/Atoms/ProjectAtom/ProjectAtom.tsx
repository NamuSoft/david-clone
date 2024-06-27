import Image from "next/image";
import styles from "./projectAtom.module.css";
import { SlideUpAnimationAtom } from "../SlideUpAnimationAtom/SlideUpAnimationAtom";
import { MaskedImgAtom } from "../MaskedImgAtom/MaskedImgAtom";
import Link from "next/link";
import { LinkAtom } from "../LinkAtom/LinkAtom";
type Props = {
  image: string;
  mask?: string;
  title: string;
  subTitle: string;
  link: string;
  className?: string;
};

export const ProjectAtom = (props: Props) => {
  return (
    <div className={`block w-[372px] p-[15px]  outline-none ${props.className}`}>
        <div className={styles.projectItem}>
          <MaskedImgAtom mask={props.mask}>
            <Image
              src={props.image}
              alt={props.title}
              width='345'
              height='352'
              decoding='async'
              data-nimg='1'
              loading='lazy'
              style={{ color: "transparent" }}
            />
          </MaskedImgAtom>

          <div className=" text-center pt-[30px]">
            <h2 className={`${styles.h2} flex flex-col`}>
              <LinkAtom href={props.link} className={styles.title}> {props.title}</LinkAtom>
              <span className={styles.span}> { props.subTitle}</span>
            </h2>
          </div>
        </div>
    </div>
  );
};
