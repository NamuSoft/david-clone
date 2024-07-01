import Image from "next/image";
import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import { HomeFeatures } from "~/components/Components/HomeFeatures/HomeFeatures";
import "./custom.css";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";

type Props = {
  //
  homeFeaturesProps: React.ComponentProps<typeof HomeFeatures>;
};

export const HomeFeaturesModule = (props: Props) => {
  return (
    <SectionPaddingAtom className='features-section relative justify-center '>
      <HomeFeatures {...props.homeFeaturesProps} />
      <div className='round-shape '>
        <ResponsiveImgAtom
          src={"/images/home/spinner.png"}
          width={238}
          height={254}
          alt=''
        />
      </div>
    </SectionPaddingAtom>
  );
};
