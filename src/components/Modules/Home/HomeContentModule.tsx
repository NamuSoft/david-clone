import { HomeWhatCanWeDoModule } from "./HomeWhatCanWeDoModule";

type Props = {
  title: string;
};

export const HomeContentModule = (props: Props) => {
  return (<div>

    <HomeWhatCanWeDoModule/>
  </div>);
};
