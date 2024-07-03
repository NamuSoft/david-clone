import { PropsWithChildren } from "react";
import "./custom.css";

type Props = {
  mask?: string;
  className?: string;
};

export const MaskedImgAtom = (props: PropsWithChildren<Props>) => {
  const style = props.mask
    ? {
        maskImage: `url(${props.mask})`,
        WebkitMaskImage: `url(${props.mask})`,
      }
    : {};

  return (
    <div
      style={style}
      className={`${props.mask ? "mask" : "rounded"} ${props.className}`}
    >
      {props.children}
    </div>
  );
};
