import { PropsWithChildren } from "react";

type Props = {
  // Add props here
  className?: string | undefined;
};

export const SectionFluidAtom = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={`${props.className} px-[65px] py-[120px] md:px-[30px] md:py-[90px]`}
    >
      {props.children}
    </div>
  );
};
