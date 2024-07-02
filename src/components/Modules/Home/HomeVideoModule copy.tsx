import Image from "next/image";
import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import "./custom.css";
import { HomeVideo } from "~/components/Components/HomeVideo/HomeVideo";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";

type Props = {
  //
  homeVideoProps: React.ComponentProps<typeof HomeVideo>;
};

export const HomeVideoModule = (props: Props) => {
  return (
    <SectionPaddingAtom className='video-section  pt-0 '>
      <HomeVideo {...props.homeVideoProps} />
      <div className='star-shape hidden lg:block'>
        <ResponsiveImgAtom
          src={"/images/home/star-shape.png"}
          width={238}
          height={254}
          alt=''
        />
      </div>
      <div className='arrow-shape hidden lg:block'>
        <ResponsiveImgAtom
          src={"/images/home/arrow-shape.png"}
          width={340}
          height={340}
          alt=''
        />
      </div>
    </SectionPaddingAtom>
  );
};
