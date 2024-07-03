import { ContactMapModule } from "~/components/Modules/Contact/ContactMapModule";
import { ContactInfoModule } from "~/components/Modules/Contact/ContactInfoModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { NavBarModule } from "~/components/Modules/NavBar/NavBarModule";
import { PageTitleModule } from "~/components/Modules/PageTitle/PageTitleModule";
import { DrawerModule } from "~/components/Modules/Drawer/DrawerModule";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";
import { NewsletterModule } from "~/components/Modules/Portfolio/PortfolioNewsletterModule";

type Props = {
  navBarModuleProps: React.ComponentProps<typeof NavBarModule>;
  pageTitleModuleProps: React.ComponentProps<typeof PageTitleModule>;
  drawerModuleProps: React.ComponentProps<typeof DrawerModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
  newsletterModuleProps: React.ComponentProps<typeof NewsletterModule>;
  contactMapModuleProps: React.ComponentProps<typeof ContactMapModule>;
  contactInfoModuleProps: React.ComponentProps<typeof ContactInfoModule>;
};

export const ContactTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ width: "100%", height: "100%", padding: 0 }}>
        <NavBarModule {...props.navBarModuleProps} />

        <PageTitleModule {...props.pageTitleModuleProps} />

        <DrawerModule {...props.drawerModuleProps} />
      </Header>

      <Content style={{ overflow: "auto" }}>
        <ContactMapModule {...props.contactMapModuleProps} />
        <ContactInfoModule {...props.contactInfoModuleProps} />
        <NewsletterModule {...props.newsletterModuleProps} />
      </Content>

      <Footer style={{ padding: 0 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};
