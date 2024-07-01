import { type PropsWithChildren } from "react";

type Props = {
  // Add props here
  className?: string | undefined;
};

export const ContainerFluidAtom = (props: PropsWithChildren<Props>) => {
  return (
    <div className={` ${props.className} mx-auto w-full px-[1.5rem]`}>
      {props.children}
    </div>
  );
};
