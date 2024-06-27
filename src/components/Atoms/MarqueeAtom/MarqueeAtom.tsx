import React from "react";
import type { FC, ReactNode } from "react";
// import styles from "./MarqueeAtom.module.css"; // Import CSS module

type Props = {
  children: ReactNode;
};

const MarqueeAtom: FC<Props> = ({ children }) => {
  return (
    <div className='marquee'>
      <div className='marquee-content'>{children}</div>
    </div>
  );
};

export default MarqueeAtom;
