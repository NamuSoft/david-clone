import { PortfolioTemplate } from "~/components/Templates/Portfolio/PortfolioTemplate";
import { useSnapshot } from "valtio";
import DrawerStore from "~/store/DrawerStore";
import { NavData } from "~/data/NavData";
import SliderStore from "~/store/SliderStore";
import { PortfolioData } from "~/data/Portfolio/PortfolioData";
import { NewsLetterData } from "~/data/Portfolio/newsLettereData";

export const PortfolioContainer = () => {
  const drawer = useSnapshot(DrawerStore.state);

  const portfolioTemplateProps: React.ComponentProps<typeof PortfolioTemplate> =
    {
      navBarModuleProps: {
        theme: false,
        navMenuProps: {
          links: NavData,
          theme: false,
        },
        navIconProps: {
          home: "home",
          theme: false,
        },
        navActionsProps: {
          showDrawer() {
            DrawerStore.open();
          },
          showSideDrawer() {
            SliderStore.open();
          },
          theme: false,
        },
      },
      drawerModuleProps: {
        openDrawer: drawer.open,
        onCloseDrawer() {
          DrawerStore.close();
        },
        drawerProps: {
          openDrawer: drawer.open,
          onCloseDrawer() {
            DrawerStore.close();
          },
        },
      },
      pageTitleModuleProps: {
        pageTitleProps: {
          title: "Portfolio",
          nav: ["Home", "Portfolio", "#"],
        },
      },
      footerModuleProps: {
        upperFooterProps: {
          logo: "logo",
        },
        lowerFooterProps: {},
      },
      portfolioPortfolioModuleProps: {
        data: PortfolioData,
      },
      portfolioNewsletterModuleProps: {
        newsLetterProps: NewsLetterData,
      },
    };

  return <PortfolioTemplate {...portfolioTemplateProps} />;
};
