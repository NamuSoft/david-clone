import { PropsWithChildren, type ReactNode } from "react";
import styles from "./custom.module.css";
type Props = {
  className?: string;
};

export const ContainerAtom = (props: PropsWithChildren<Props>) => {
  return (
    <div className={`${props.className} ${styles.container}`}>
      {props.children}{" "}
    </div>
  );
};
