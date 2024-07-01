import { SectionPaddingAtom } from "~/components/Atoms/SectionPaddingAtom/SectionPaddingAtom";
import "./custom.css";
import { ContainerAtom } from "~/components/Atoms/ContainerAtom/ContainerAtom";
import { HomePartners } from "~/components/Components/HomePartners/HomePartners";

type Props = {
  //
  homePartnersProps: React.ComponentProps<typeof HomePartners>;
};

export const HomePartnersModule = (props: Props) => {
  return <HomePartners {...props.homePartnersProps} />;
};
