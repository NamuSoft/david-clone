import React from "react";
import { RowAtom } from "../RowAtom/RowAtom";

type Props = {
  title: string;
  subtitle: string;
  className?: string;
};

export const SectionTitleAtom = (props: Props) => {
  return (
    <RowAtom className={` sm:items-center ${props.className}`}>
      <div className='section-title mx-auto mb-[20px] text-center sm:mb-[40px] md:mx-4 md:mb-[60px] md:text-left'>
        <span className='mb-[20px] block text-[16px] font-medium not-italic leading-[29px] tracking-[4px] text-inherit sm:text-[15px] md:tracking-[8px]'>
          {props.subtitle}
        </span>
        <h2 className='mt-0 text-[35px] leading-[40px] text-inherit sm:text-[50px] md:text-[60px] lg:text-[70px]'>
          {props.title}
        </h2>
      </div>
    </RowAtom>
  );
};
