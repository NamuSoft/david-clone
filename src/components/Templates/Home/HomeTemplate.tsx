import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
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
import { HomeSideDrawerModule } from "~/components/Modules/Home/HomeSideDrawerModule";
import { DrawerModule } from "~/components/Modules/Drawer/DrawerModule";
import { NavBarModule } from "~/components/Modules/NavBar/NavBarModule";
import { HomeEventModule } from "~/components/Modules/Home/HomeEventModule";

type Props = {
  heroProps: React.ComponentProps<typeof HomeHeroModule>;
  projectModuleProps: React.ComponentProps<typeof HomeProjectModule>;
  homeTestimonialModuleProps: React.ComponentProps<
    typeof HomeTestimonialModule
  >;
  homePartnersModuleProps: React.ComponentProps<typeof HomePartnersModule>;
  homeSideDrawerModuleProps: React.ComponentProps<typeof HomeSideDrawerModule>;
  homeFeaturesModuleProps: React.ComponentProps<typeof HomeFeaturesModule>;
  homeTeamModuleProps: React.ComponentProps<typeof HomeTeamModule>;
  homeVideoModuleProps: React.ComponentProps<typeof HomeVideoModule>;
  homeServiceModuleProps: React.ComponentProps<typeof HomeServiceModule>;
  homeMarqueeModuleProps: React.ComponentProps<typeof HomeMarqueeModule>;
  homeEventModuleProps: React.ComponentProps<typeof HomeEventModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
  drawerModuleProps: React.ComponentProps<typeof DrawerModule>;
  navBarModuleProps: React.ComponentProps<typeof NavBarModule>;
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
        <NavBarModule {...props.navBarModuleProps} />

        <HomeSideDrawerModule {...props.homeSideDrawerModuleProps} />
        <DrawerModule {...props.drawerModuleProps} />
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
        <HomeEventModule {...props.homeEventModuleProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};
