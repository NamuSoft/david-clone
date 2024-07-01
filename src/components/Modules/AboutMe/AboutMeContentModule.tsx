import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import { AboutContent } from "~/components/Components/AboutContent/AboutContent";
import "./custom.css";
import { Event } from "~/components/Components/Event/Event";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";
import { RowAtom } from "~/components/Atoms/RowAtom/RowAtom";
import { Service } from "~/components/Components/Service/Service";

type Props = {
  title: string;
  aboutContentProps: React.ComponentProps<typeof AboutContent>;
  eventProps: React.ComponentProps<typeof Event>;
  serviceProps: React.ComponentProps<typeof Service>;
  image: string;
};

export const AboutMeContentModule = (props: Props) => {
  return (
    <SectionPaddingAtom className='about-page pb-o  bg-white'>
      <ContainerAtom>
        <RowAtom className=' items-center'>
          <div className=' lg:w-2/3'>
            <div className='about-page-left block'>
              <AboutContent {...props.aboutContentProps} />
              <div className='event-section mt-o'>
                <ContainerAtom>
                  <RowAtom>
                    <Event
                      {...props.eventProps}
                      className="'w-full  lg:w-1/2'  pl-4 pr-4 md:w-1/2"
                    />
                  </RowAtom>
                </ContainerAtom>
              </div>

              <Service {...props.serviceProps} />
            </div>
          </div>
          <div className=' mx-auto lg:w-1/3'>
            <div className='about-apge-right-img'>
              <ResponsiveImgAtom
                height={1928}
                width={575}
                src={props.image}
                alt=''
              />
            </div>
          </div>
        </RowAtom>
      </ContainerAtom>
    </SectionPaddingAtom>
  );
};
