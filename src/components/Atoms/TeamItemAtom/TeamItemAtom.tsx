import "./custom.css";
import { MaskedImgAtom } from "../MaskedImgAtom/MaskedImgAtom";
import Image from "next/image";
import Link from "next/link";

type Props = {
  mask: string;
  image: string;
  url: string;
  title: string;
  sub: string;
};

export const TeamItemAtom = (props: Props) => {
  return (
    <div className='team-item'>
      <MaskedImgAtom mask={props.mask} className='team-img'>
        <Image alt='' src={props.image} width={419} height={610} />
      </MaskedImgAtom>
      <div className='team-text'>
        <h3>
          <Link href={props.url}>{props.title}</Link>
        </h3>
        <span>{props.sub}</span>
      </div>
    </div>
  );
};
