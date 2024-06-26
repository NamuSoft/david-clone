import type { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type Props = {
  // Add props here
  href: Url;
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
};

export const LinkAtom = (props: Props) => {
  return (
    <Link
      href={props.href}
      className={`a ${props.className} hover-primary`}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};
