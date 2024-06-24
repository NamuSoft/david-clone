import { CarouselAtom } from "~/components/Atoms/CarouselAtom/CarouselAtom";
import styles from "./custom.module.css";
import Image from "next/image";
import { SliderAtom } from "~/components/Atoms/SliderAtom/SliderAtom";
type Props = {
  title: string;
  partners: string[];
};

export const HomePartners = (props: Props) => {
  const data = props.partners.map((item, index) => (
    <div className='' key={index}>
      <Image
        alt=''
        src={item}
        width={159}
        height={30}
        decoding='async'
        data-nimg='1'
        loading='lazy'
        className='mx-4' // Apply margin-right for spacing
      />
    </div>
  ));

  return (
    <div className={`${styles.partnersSection} italiana-regular`}>
      <h2>{props.title}</h2>
      <div className={`${styles.container}`}>
        <div className='partner '>
          <SliderAtom noarrows autoplay show={5}>{data}</SliderAtom>
        </div>
      </div>
    </div>
  );
};
