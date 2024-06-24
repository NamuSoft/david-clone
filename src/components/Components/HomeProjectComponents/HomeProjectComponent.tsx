import { SlideUpAnimationAtom } from "~/components/Atoms/SlideUpAnimationAtom/SlideUpAnimationAtom";
import { ProjectAtom } from "../../Atoms/ProjectAtom/ProjectAtom";
import "./custom.css"
import { SliderAtom } from "~/components/Atoms/SliderAtom/SliderAtom";
type Props = {
  data: React.ComponentProps<typeof ProjectAtom>[];
};

export const HomeProjectComponent = ({ data }: Props) => {
  // Map data to ProjectAtom components
  const projectComponents = data.map((item, index) => (
    <SlideUpAnimationAtom key={index}>
      <ProjectAtom {...item} className='project-item item' />
    </SlideUpAnimationAtom>
  ));

  return (
    <SliderAtom>
      {/* Render mapped components directly */}
      {projectComponents}
    </SliderAtom>
  );
};
