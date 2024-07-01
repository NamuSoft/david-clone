import type { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import type { MouseEventHandler, PropsWithChildren, ReactNode } from "react";
import "./custom.css";

type Props = {
  // Add props here
  href: Url;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
};

export const LinkAtom = (props: PropsWithChildren<Props>) => {
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
