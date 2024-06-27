import { SlideUpAnimationAtom } from "~/components/Atoms/SlideUpAnimationAtom/SlideUpAnimationAtom";
import { ProjectAtom } from "../../Atoms/ProjectAtom/ProjectAtom";
import "./custom.css"
import {
  type Break,
  SliderAtom,
} from "~/components/Atoms/SliderAtom/SliderAtom";
type Props = {
  data: React.ComponentProps<typeof ProjectAtom>[];
};

export const HomeProjectComponent = ({ data }: Props) => {
  // Map data to ProjectAtom components
  const projectComponents = data.map((item, index) => (
    <SlideUpAnimationAtom key={index} className=''>
      <ProjectAtom
        {...item}
        className='px-30 max-auto w-[335px] justify-self-center  outline-none'
      />
    </SlideUpAnimationAtom>
  ));
  const responsive: Break = [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
  ];
  return (
    <SliderAtom
      responsive={responsive}
      className='item projectItem items-center'
    >
      {projectComponents}
    </SliderAtom>
  );
};
