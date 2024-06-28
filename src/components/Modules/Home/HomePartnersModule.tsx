import "./custom.css";
import { HomePartners } from "~/components/Components/HomePartners/HomePartners";

type Props = {
  //
  homePartnersProps: React.ComponentProps<typeof HomePartners>;
};

export const HomePartnersModule = (props: Props) => {
  return <HomePartners {...props.homePartnersProps} />;
};
