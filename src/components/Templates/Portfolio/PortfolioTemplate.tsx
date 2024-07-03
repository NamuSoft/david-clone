import { PortfolioPortfolioModule } from "~/components/Modules/Portfolio/PortfolioPortfolioModule";
import { NewsletterModule } from "~/components/Modules/Portfolio/PortfolioNewsletterModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { NavBarModule } from "~/components/Modules/NavBar/NavBarModule";
import { PageTitleModule } from "~/components/Modules/PageTitle/PageTitleModule";
import { DrawerModule } from "~/components/Modules/Drawer/DrawerModule";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";
import { TopButtonModule } from "~/components/Modules/TopButton/TopButtonModule";

type Props = {
  navBarModuleProps: React.ComponentProps<typeof NavBarModule>;

  portfolioPortfolioModuleProps: React.ComponentProps<
    typeof PortfolioPortfolioModule
  >;
  portfolioNewsletterModuleProps: React.ComponentProps<typeof NewsletterModule>;
  pageTitleModuleProps: React.ComponentProps<typeof PageTitleModule>;
  drawerModuleProps: React.ComponentProps<typeof DrawerModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const PortfolioTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", position: "relative" }}>
      <Header style={{ width: "100%", height: "100%", padding: 0 }}>
        <NavBarModule {...props.navBarModuleProps} />

        <PageTitleModule {...props.pageTitleModuleProps} />

        <DrawerModule {...props.drawerModuleProps} />
      </Header>

      <Content>
        <PortfolioPortfolioModule {...props.portfolioPortfolioModuleProps} />
        <NewsletterModule {...props.portfolioNewsletterModuleProps} />
        <TopButtonModule />
      </Content>

      <Footer style={{ padding: 0 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};
  