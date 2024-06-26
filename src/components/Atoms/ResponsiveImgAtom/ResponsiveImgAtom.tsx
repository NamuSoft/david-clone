import Image from "next/image";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import "./custom.css";

type Props = {
  src: string | StaticImport;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  className?: string | undefined;
  alt: string;
};

export const ResponsiveImgAtom = (props: Props) => {
  return (
    <div
      className={`relativee ${props.className}`}
      style={{ width: props.width, height: props.height }}
    >
      <Image
        src={props.src}
        layout='fill'
        alt={props.alt}
        className='object-cover'
        loading='lazy'
      />
    </div>
  );
};
