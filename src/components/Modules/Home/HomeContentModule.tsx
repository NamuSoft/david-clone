import React from "react";
import { HomeHeroModule } from "./HomeHeroModule";
import { HomeMarqueeModule } from "./HomeMarqueeModule";
import { HomeProjectModule } from "./HomeProjectModule";
import { HomeServiceModule } from "./HomeServiceModule";
import { HomeTestimonial } from "~/components/Components/HomeTestimonial/HomeTestimonial";
import { HomePartners } from "~/components/Components/HomePartners/HomePartners";
import { HomeFeatures } from "~/components/Components/HomeFeatures/HomeFeatures";

type Props = {
  title: string;
  heroProps: React.ComponentProps<typeof HomeHeroModule>;
  projectModuleProps: React.ComponentProps<typeof HomeProjectModule>;
  homeTestimonialProps: React.ComponentProps<typeof HomeTestimonial>;
  homePartnersProps: React.ComponentProps<typeof HomePartners>;
  homeFeaturesProps: React.ComponentProps<typeof HomeFeatures>;
};

export const HomeContentModule = (props: Props) => {
  return (
    <div className='container  mx-auto max-w-full '>
      <HomeHeroModule {...props.heroProps} />
      <HomeServiceModule />
      <HomeMarqueeModule />
      <HomeProjectModule {...props.projectModuleProps} />
      <HomeTestimonial {...props.homeTestimonialProps} />
      <HomePartners {...props.homePartnersProps} />
      <HomeFeatures {...props.homeFeaturesProps} />
    </div>
  );
};
