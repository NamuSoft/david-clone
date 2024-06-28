import { type ReactNode } from "react";
import "./custom.css"

type Props = {
  // Add props here
  children: ReactNode,
  className: string,
  // style: 
    };

export const SectionPaddingAtom = (props: Props) => {
  return (<div className={` ${props.className} section-padding`}>{ props.children}</div>);
};