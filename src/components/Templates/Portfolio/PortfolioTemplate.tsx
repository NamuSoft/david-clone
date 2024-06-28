import { PortfolioPortfolioModule } from "~/components/Modules/Portfolio/PortfolioPortfolioModule";
import { PortfolioNewsletterModule } from "~/components/Modules/Portfolio/PortfolioNewsletterModule";
  import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

type Props = {
  portfolioPortfolioModuleProps: React.ComponentProps<typeof PortfolioPortfolioModule>;
  portfolioNewsletterModuleProps: React.ComponentProps<typeof PortfolioNewsletterModule>;
};

export const PortfolioTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
    {/*
    <Header style={{ padding: 0, height: 50 }}>
    place for header module
    </Header>
    */}

    <Content style={{ overflow: "auto" }}>
           <PortfolioPortfolioModule {...props.portfolioPortfolioModuleProps}  />
     <PortfolioNewsletterModule {...props.portfolioNewsletterModuleProps}  />
    </Content>

    {/*
    <Footer style={{ padding: 0, minHeight: 50 }}>
    place for footer module
    </Footer>
    */}
  </Layout>
  );
};
  