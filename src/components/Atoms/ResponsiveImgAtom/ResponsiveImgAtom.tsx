import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
  // Add props here
  src: string | StaticImport;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  className?: string | undefined;
  alt: string;
};

export const ResponsiveImgAtom = (props: Props) => {
  return (
    <Image
      src={props.src}
      width={props.width}
      style={{
        maxHeight: props.height,
        maxWidth: props.width,
      }}
      height={props.height}
      className={`${props.className} left-0 top-0 h-full w-full  object-cover`}
      objectFit='cover'
      alt={props.alt}
    />
  );
};
