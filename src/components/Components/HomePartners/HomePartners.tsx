import { CarouselAtom } from "~/components/Atoms/CarouselAtom/CarouselAtom";
import styles from "./custom.module.css";
import Image from "next/image";
import { Break, SliderAtom } from "~/components/Atoms/SliderAtom/SliderAtom";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";
import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { RowAtom } from "~/components/Atoms/RowAtom/RowAtom";
type Props = {
  title: string;
  partners: string[];
};

export const HomePartners = (props: Props) => {
  const data = props.partners.map((item, index) => (
    <div className='mx-20 grid' key={index}>
      <ResponsiveImgAtom alt='' src={item} width={159} height={30} />
    </div>
  ));

  const breaks: Break = [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
  ];
  return (
    <div className={`${styles.partnersSection} italiana-regular`}>
      <h2>{props.title}</h2>
      <ContainerAtom>
        <RowAtom>
          <div className='relative max-w-full flex-1 flex-grow px-4 pl-4 pr-4 sm:w-full'>
            <div className='partner '>
              <SliderAtom noarrows autoplay show={5} responsive={breaks}>
                {data}
              </SliderAtom>
            </div>
          </div>
        </RowAtom>
      </ContainerAtom>
    </div>
  );
};
