import type {  ReactNode } from "react";
import styles from "./MarqueeAtom.module.css"; // Import CSS module

type Props = {
  children: ReactNode;
};

export const MarqueeAtom = ( props:Props) => {
  return (
    <div className='marquee'>
      <div className='marquee-content'>{props.children}</div>
    </div>
  );
};
