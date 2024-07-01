import Image from "next/image";
import styles from "./projectAtom.module.css";
import { MaskedImgAtom } from "../MaskedImgAtom/MaskedImgAtom";
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
    <div className={props.className}>
      <div className={`${styles.projectItem} here `}>
        <MaskedImgAtom mask={props.mask}>
          <Image
            src={props.image}
            alt={props.title}
            width='345'
            height='352'
            decoding='async'
            data-nimg='1'
            loading='lazy'
            className={styles.projectImg}
          />
        </MaskedImgAtom>

        <div className='pt-[30px] text-center'>
          <h2 className={`${styles.h2} flex flex-col`}>
            <LinkAtom href={props.link} className={styles.title}>
              {props.title}
            </LinkAtom>
            <span className={styles.span}>{props.subTitle}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
