import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
  import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";

type Props = {
  homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", backgroundColor: "#1f1f1f" }}>
      {/* <Header style={{ padding: 0, position:"relative"}} className="bg-white"> */}
      <HomeHeaderModule {...props.homeHeaderModuleProps} />
      {/* </Header> */}

      {/* <Content style={{ overflow: "auto", position:"relative" }}> */}
      <HomeContentModule {...props.homeContentModuleProps} />
      {/* </Content> */}

      {/*
    <Footer style={{ padding: 0, minHeight: 50 }}>
    place for footer module
    </Footer>
    */}
    </Layout>
  );
};
  