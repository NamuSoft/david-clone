import { PortfolioTemplate } from "~/components/Templates/Portfolio/PortfolioTemplate";

export const PortfolioContainer = () => {

  const portfolioTemplateProps: React.ComponentProps<typeof PortfolioTemplate> = {
    portfolioPortfolioModuleProps: { title: "PortfolioPortfolioModule" },
  portfolioNewsletterModuleProps: { title: "PortfolioNewsletterModule" },
  };

  return <PortfolioTemplate {...portfolioTemplateProps} />;
};
