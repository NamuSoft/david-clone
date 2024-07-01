import { LinkAtom } from "../LinkAtom/LinkAtom";
import { ResponsiveImgAtom } from "../ResponsiveImgAtom/ResponsiveImgAtom";
import { SlideUpAnimationAtom } from "../SlideUpAnimationAtom/SlideUpAnimationAtom";
import "./custom.css";

type Props = {
  // Add props here
  img: string;
  link: string;
  titlle: string;
  content: string;
  height?: number;
};

export const ServiceAtom = (props: Props) => {
  return (
    <SlideUpAnimationAtom>
      <div className='service-item'>
        <ResponsiveImgAtom
          src={props.img}
          width={100}
          height={props.height ?? 57}
          alt=''
        />
        <h2>
          <LinkAtom href={props.link}>{props.titlle}</LinkAtom>
        </h2>
        <p>{props.content}</p>
      </div>
    </SlideUpAnimationAtom>
  );
};
