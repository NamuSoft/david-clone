import type { CSSProperties, PropsWithChildren } from "react";
import "./custom.css";

type Props = {
  // Add props here

  className: string;
  style?: CSSProperties | undefined;
};

export const SectionPaddingAtom = (props: PropsWithChildren<Props>) => {
  return (
    <div className={` ${props.className} section-padding`} style={props.style}>
      {props.children}
    </div>
  );
};
