import { PropsWithChildren, type ReactNode } from "react";
import "./custom.css";

type Props = {
  // Add props here
  className?: string;
};

export const SlideUpAnimationAtom = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={`css-z1mjt4 ${props.className}`}
      style={{
        animationDelay: "0ms",
      }}
    >
      {props.children}
    </div>
  );
};
