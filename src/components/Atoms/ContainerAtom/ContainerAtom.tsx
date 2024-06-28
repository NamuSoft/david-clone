import { type ReactNode } from "react";
import styles from "./custom.module.css"
type Props = {
  children: ReactNode;
  className?: string; 
};

export const ContainerAtom = (props: Props) => {
  return (<div className={`${props.className} ${styles.container}`}>{props.children} </div>);
};