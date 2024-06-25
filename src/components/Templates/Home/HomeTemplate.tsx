import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { HomeTestimonial } from "~/components/Components/HomeTestimonial/HomeTestimonial";
import { HomePartners } from "~/components/Components/HomePartners/HomePartners";
import { HomeFeatures } from "~/components/Components/HomeFeatures/HomeFeatures";
import { HomeHeroModule } from "~/components/Modules/Home/HomeHeroModule";
import { HomeProjectModule } from "~/components/Modules/Home/HomeProjectModule";
import { HomeServiceModule } from "~/components/Modules/Home/HomeServiceModule";
import HomeMarqueeModule from "~/components/Modules/Home/HomeMarqueeModule";
import { HomeFeaturesModule } from "~/components/Modules/Home/HomeFeaturesModule";
import { HomeTeamModule } from "~/components/Modules/Home/HomeTeamModule";
import { HomeVideoModule } from "~/components/Modules/Home/HomeVideoModule copy";

type Props = {
  title: string;
  heroProps: React.ComponentProps<typeof HomeHeroModule>;
  projectModuleProps: React.ComponentProps<typeof HomeProjectModule>;
  homeTestimonialProps: React.ComponentProps<typeof HomeTestimonial>;
  homePartnersProps: React.ComponentProps<typeof HomePartners>;
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  homeFeaturesModuleProps: React.ComponentProps<typeof HomeFeaturesModule>;
  homeTeamModuleProps: React.ComponentProps<typeof HomeTeamModule>;
  homeVideoModuleProps: React.ComponentProps<typeof HomeVideoModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", backgroundColor: "#1f1f1f" }}>
      <Header style={{ padding: 0 }}>
        <HomeHeaderModule {...props.homeHeaderModuleProps} />
      </Header>

      <Content
        className='container  mx-auto max-w-full '
        style={{ overflow: "hidden" }}
      >
        <HomeHeroModule {...props.heroProps} />
        <HomeServiceModule />
        <HomeMarqueeModule />
        <HomeProjectModule {...props.projectModuleProps} />
        <HomeTestimonial {...props.homeTestimonialProps} />
        <HomePartners {...props.homePartnersProps} />
        <HomeFeaturesModule {...props.homeFeaturesModuleProps} />
        <HomeTeamModule {...props.homeTeamModuleProps} />
        <HomeVideoModule {...props.homeVideoModuleProps} />
      </Content>

      {/*       
     <Footer style={{ padding: 0, minHeight: 50 }}>
    place for footer module
    </Footer> */}
    </Layout>
  );
};
