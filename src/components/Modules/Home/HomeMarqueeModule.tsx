import React from "react";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";
import "./custom.css"; // Import CSS module
import { RowAtom } from "~/components/Atoms/RowAtom/RowAtom";

type Props = {
  data: string[];
};

// HomeHeroModule functional component
export const HomeMarqueeModule = (props: Props) => {
  return (
    <div className=''>
      <RowAtom className='overflow-hidden'>
        {" "}
        <h1 className='marqq xl:leading-12 my-20 flex transform flex-row justify-around space-x-20 whitespace-nowrap  text-5xl font-normal uppercase leading-10 tracking-[7.5px] text-white will-change-transform sm:text-2xl sm:leading-8 sm:tracking-[5px] md:space-x-40 md:text-4xl md:leading-[80px] md:tracking-[30px] lg:text-6xl xl:text-[150px]'>
          {props.data.map((item, index) => (
            <div key={index} className='flex items-center  justify-around'>
              <div className=' '>{item}</div>
              <ResponsiveImgAtom
                src={"/images/star.png"}
                width={118}
                height={119}
                alt=''
                className=''
              />
            </div>
          ))}
        </h1>
      </RowAtom>
    </div>
  );
};

export default HomeMarqueeModule;
