import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import "./custom.css";
import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { HomeTestimonial } from "~/components/Components/HomeTestimonial/HomeTestimonial";

type Props = {
  //
  homeTestimonialProps: React.ComponentProps<typeof HomeTestimonial>;
};

export const HomeTestimonialModule = (props: Props) => {
  return (
    <SectionPaddingAtom className='testimonial-section sm:pt-0'>
      <ContainerAtom>
        <HomeTestimonial {...props.homeTestimonialProps} />
      </ContainerAtom>
    </SectionPaddingAtom>
  );
};
