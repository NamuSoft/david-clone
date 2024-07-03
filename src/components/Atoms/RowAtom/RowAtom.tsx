import type { PropsWithChildren, ReactNode } from "react";
import "./custom.css";

type Props = {
  // Add props here
  className?: string | undefined;
};

export const RowAtom = (props: PropsWithChildren<Props>) => {
  return (
    <div className={`${props.className} flex flex-wrap `}>{props.children}</div>
  );
};
