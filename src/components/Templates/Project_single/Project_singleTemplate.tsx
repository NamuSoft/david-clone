import { Project_singleContentModule } from "~/components/Modules/Project_single/Project_singleContentModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { NavBarModule } from "~/components/Modules/NavBar/NavBarModule";
import { PageTitleModule } from "~/components/Modules/PageTitle/PageTitleModule";
import { DrawerModule } from "~/components/Modules/Drawer/DrawerModule";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";

type Props = {
  project_singleContentModuleProps: React.ComponentProps<
    typeof Project_singleContentModule
  >;
  navBarModuleProps: React.ComponentProps<typeof NavBarModule>;
  pageTitleModuleProps: React.ComponentProps<typeof PageTitleModule>;
  drawerModuleProps: React.ComponentProps<typeof DrawerModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const Project_singleTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ width: "100%", height: "100%", padding: 0 }}>
        <NavBarModule {...props.navBarModuleProps} />

        <PageTitleModule {...props.pageTitleModuleProps} />

        <DrawerModule {...props.drawerModuleProps} />
      </Header>

      <Content style={{ overflow: "auto" }}>
        <Project_singleContentModule
          {...props.project_singleContentModuleProps}
        />
      </Content>

      <Footer style={{ padding: 0 }}>
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};
