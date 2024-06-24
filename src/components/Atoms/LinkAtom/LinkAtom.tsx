import Link from "next/link";
import {type  ReactNode } from "react";

type Props = {

  // Add props here
  href: string,
  children: ReactNode,
  className?: string
};
    

export const LinkAtom = (props: Props) => {
  return (<Link href={props.href} className={`a ${props.className} hover-primary`}>{ props.children}</Link>);
};