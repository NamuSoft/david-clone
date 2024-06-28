import Image from "next/image";
import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import "./custom.css";
import { HomeVideo } from "~/components/Components/HomeVideo/HomeVideo";
import { Event } from "~/components/Components/Event/Event";
import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { RowAtom } from "~/components/Atoms/RowAtom/RowAtom";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
// import { Row } from "antd";
import { BlogItems } from "~/components/Components/BlogItems/BlogItems";

type Props = {
  //
  blogProps: React.ComponentProps<typeof BlogItems>;
  subTitle: string;
  title: string;
};

export const HomeBlogModule = (props: Props) => {
  return (
    <SectionPaddingAtom className='blog-section pb-[90px] sm:pb-[50px]  md:pb-[60px]'>
      <ContainerAtom>
        <RowAtom className=' sm:items-center'>
          <div className='section-title mx-auto mb-[20px] text-center sm:mb-[40px] md:mx-4 md:mb-[60px] md:text-left'>
            <span className='mb-[20px] block text-[16px] font-medium not-italic leading-[29px] tracking-[4px] text-white sm:text-[15px] md:tracking-[8px]'>
              {props.subTitle}
            </span>
            <h2 className='mt-0 text-[35px] leading-[40px] text-white sm:text-[50px] md:text-[60px] lg:text-[70px]'>
              {props.title}
            </h2>
          </div>
        </RowAtom>

        <BlogItems {...props.blogProps} />
      </ContainerAtom>
    </SectionPaddingAtom>
  );
};
