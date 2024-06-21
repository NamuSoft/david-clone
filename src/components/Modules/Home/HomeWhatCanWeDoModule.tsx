import { Drawer } from "antd";
import { useState } from "react";
import { DrawerAtom } from "~/components/Atoms/DrawerAtom/DrawerAtom";
import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";
import { NavBarAtom } from "~/components/Atoms/NavBarAtom/NavBarAtom";

type Props = {
  title?: string;
};

export const HomeWhatCanWeDoModule = (props: Props) => {

  return (
    <section className='flex-coll flex  justify-center bg-white pt-[120px]'>
      <div className='w-max-[540px] justify-center'>
        <span className='space-mono-regular block text-center text-[16px] font-medium leading-[29px] tracking-[8px]'>
          Our Service
        </span>
        <h2 className=' text-center text-[80px] font-normal leading-normal'>
          What We Can Do For You
        </h2>
      </div>
    </section>
  );
};
