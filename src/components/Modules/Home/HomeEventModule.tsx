import Image from "next/image";
import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import "./custom.css";
import { HomeVideo } from "~/components/Components/HomeVideo/HomeVideo";
import { Event } from "~/components/Components/Event/Event";
import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { RowAtom } from "~/components/Atoms/RowAtom/RowAtom";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  //
  eventProps: React.ComponentProps<typeof Event>;
};

export const HomeEventModule = (props: Props) => {
  return (
    <div className='event-section'>
      <ContainerAtom>
        <RowAtom>
          <div className='flex w-full items-center justify-center   md:w-full lg:w-1/2 '>
            <div className='even-left-img relative z-[1]  md:text-center '>
              <ResponsiveImgAtom
                src={"/images/home/witch.png"}
                width={595}
                height={494}
                alt=''
                className='relative'
              />
              <div className=' absolute left-0 top-0 -z-10 '>
                <ResponsiveImgAtom
                  src={"/images/home/witch-bg.png"}
                  width={595}
                  height={494}
                  alt=''
                />
              </div>
            </div>
          </div>
          <Event
            {...props.eventProps}
            className='w-full pl-4 pr-4 text-white sm:w-1/2 md:w-1/2 lg:w-1/4'
          />
        </RowAtom>
      </ContainerAtom>
    </div>
  );
};
