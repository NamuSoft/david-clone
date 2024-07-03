import type { PropsWithChildren } from "react";
import "./custom.css";

type Props = {
  // Add props here
  className?: string | undefined;
};

export const RowAtom = (props: PropsWithChildren<Props>) => {
  return (
    <div className={`${props.className} flex flex-wrap  justify-center`}>
      {props.children}
    </div>
  );
};
