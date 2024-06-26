import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import { AboutContent } from "~/components/Components/AboutContent/AboutContent";
import "./custom.css";
import { Event } from "~/components/Components/Event/Event";

type Props = {
  title: string;
  aboutContentProps: React.ComponentProps<typeof AboutContent>;
  evenProps: React.ComponentProps<typeof Event>;
};

export const AboutMeContentModule = (props: Props) => {
  return (
    <SectionPaddingAtom className='about-page pb-o '>
      <ContainerAtom>
        <div className='flex flex-wrap '>
          <div className='pl-4 pr-4 lg:w-2/3'>
            <div className='about-page-left block'>
              <AboutContent {...props.aboutContentProps} />
              <Event {...props.evenProps} />
            </div>
          </div>
          <div className='pl-4 pr-4 lg:w-1/3'></div>
        </div>
      </ContainerAtom>
    </SectionPaddingAtom>
  );
};
