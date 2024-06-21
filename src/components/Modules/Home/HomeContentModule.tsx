import { HomeHeroModule } from "./HomeHeroModule";

type Props = {
  title: string;
  heroProps: React.ComponentProps<typeof HomeHeroModule>

};

export const HomeContentModule = (props: Props) => {
  return (<div>
      
    <HomeHeroModule {...props.heroProps} />
  </div>);
};
