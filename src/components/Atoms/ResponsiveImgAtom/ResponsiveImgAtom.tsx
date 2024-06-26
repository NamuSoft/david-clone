import Image from "next/image";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import "./custom.css";

type Props = {
  src: string | StaticImport;
  width: number;
  height: number;
  className?: string | undefined;
  alt: string;
};

export const ResponsiveImgAtom = (props: Props) => {
  return (
    <Image
      className={`object-contain ${props.className}`}
      src={props.src}
      layout='responsive'
      width={props.width}
      height={props.height}
      alt={props.alt}
      style={{
        maxWidth: props.width,
        maxHeight: props.height,
      }}
      loading='lazy'
    />
  );
};
