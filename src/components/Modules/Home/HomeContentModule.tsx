import { HomeHeroModule } from "./HomeHeroModule";
import { HomeMarqueeModule } from "./HomeMarqueeModule";
import { HomeServiceModule } from "./HomeServiceModule";

type Props = {
  title: string;
  heroProps: React.ComponentProps<typeof HomeHeroModule>

};

export const HomeContentModule = (props: Props) => {
  return (
    <div className='container  mx-auto max-w-full  px-[70px]'>
      <HomeHeroModule {...props.heroProps} />
      <HomeServiceModule />
      <HomeMarqueeModule/>
    </div>
  );
};
