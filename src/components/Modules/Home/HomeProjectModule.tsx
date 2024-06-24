import MarqueeAtom from "~/components/Atoms/MarqueeAtom/MarqueeAtom";
import { SliderAtom } from "~/components/Atoms/SliderAtom/SliderAtom";
import { HomeProjectComponent } from "~/components/Components/HomeComponents/HomeProjectComponent";

type Props = {
  title?: string;
  projectComponentProp: React.ComponentProps<typeof HomeProjectComponent>;
};

export const HomeProjectModule = (props: Props) => {
  return (
    <section className='project-section'>
      <div className='section-fluid'>
        {/* <SliderAtom> */}
        <HomeProjectComponent {...props.projectComponentProp} />
        {/* </SliderAtom> */}
      </div>
    </section>
  );
};
