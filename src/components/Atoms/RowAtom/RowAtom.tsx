import type { ReactNode } from "react";
import "./custom.css";

type Props = {
  // Add props here
  className?: string | undefined;
  children: ReactNode;
};

export const RowAtom = (props: Props) => {
  return (
    <div className={`${props.className} flex flex-wrap `}>{props.children}</div>
  );
};
