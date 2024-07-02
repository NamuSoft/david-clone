import styles from "./custom.module.css";
import {
  type Break,
  SliderAtom,
} from "~/components/Atoms/SliderAtom/SliderAtom";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";
import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { RowAtom } from "~/components/Atoms/RowAtom/RowAtom";

type Props = {
  title: string;
  partners: string[];
};

export const HomePartners = (props: Props) => {
  const data = props.partners.map((item, index) => (
    <div className={`${styles.partnerItem}`} key={index}>
      <ResponsiveImgAtom
        alt=''
        src={item}
        width={159}
        height={30}
        className='mx-auto'
      />
    </div>
  ));

  const breaks: Break = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ];

  return (
    <div className={`${styles.partnersSection} italiana-regular`}>
      <h2>{props.title}</h2>
      <ContainerAtom>
        <RowAtom>
          <div className='relative max-w-full flex-1 flex-grow px-4 pl-4 pr-4 sm:w-full'>
            <div className='partner'>
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
