import {type  ReactNode } from "react";
import "./custom.css"

type Props = {
  // Add props here
  children: ReactNode;
    };

export const SlideUpAnimationAtom = (props: Props) => {
  return (
    <div
      className='css-z1mjt4'
      style={{
        width: "100%",
        display: "inline-block",
        animationDelay: "0ms",
      }}
    >
      {props.children}
    </div>
  );
};