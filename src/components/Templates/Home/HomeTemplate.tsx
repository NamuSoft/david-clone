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
import { FooterModule } from "~/components/Modules/Footer/FooterModule";
import { HomeTestimonialModule } from "~/components/Modules/Home/HomeTestimonialModule";
import { HomePartnersModule } from "~/components/Modules/Home/HomePartnersModule";

type Props = {
  title: string;
  heroProps: React.ComponentProps<typeof HomeHeroModule>;
  projectModuleProps: React.ComponentProps<typeof HomeProjectModule>;
  homeTestimonialModuleProps: React.ComponentProps<
    typeof HomeTestimonialModule
  >;
  homePartnersModuleProps: React.ComponentProps<typeof HomePartnersModule>;
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  homeFeaturesModuleProps: React.ComponentProps<typeof HomeFeaturesModule>;
  homeTeamModuleProps: React.ComponentProps<typeof HomeTeamModule>;
  homeVideoModuleProps: React.ComponentProps<typeof HomeVideoModule>;
  homeServiceModuleProps: React.ComponentProps<typeof HomeServiceModule>;
  homeMarqueeModuleProps: React.ComponentProps<typeof HomeMarqueeModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout
      style={{
        height: "100%",
        backgroundColor: "#1f1f1f",
        position: "relative",
      }}
    >
      <Header style={{ width: "100%", height: "100%", padding: 0 }}>
        <HomeHeaderModule {...props.homeHeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "hidden" }}>
        <HomeHeroModule {...props.heroProps} />
        <HomeServiceModule {...props.homeServiceModuleProps} />
        <HomeMarqueeModule {...props.homeMarqueeModuleProps} />
        <HomeProjectModule {...props.projectModuleProps} />
        <HomeTestimonialModule {...props.homeTestimonialModuleProps} />
        <HomePartnersModule {...props.homePartnersModuleProps} />
        <HomeFeaturesModule {...props.homeFeaturesModuleProps} />
        <HomeTeamModule {...props.homeTeamModuleProps} />
        <HomeVideoModule {...props.homeVideoModuleProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};
