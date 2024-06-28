import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import { HomeProejctData } from "~/data/Home/HomeProjectData";
import { HomeTestimonialData } from "~/data/Home/HomeTestimonialData";
import { HomePartnertData } from "~/data/Home/HomePartnerData";
import { HomeFeatureData } from "~/data/Home/HomeFeatureData";
import { HomeTeamData } from "~/data/Home/HomeTeamData";
import { useSnapshot } from "valtio";
import DrawerStore from "~/store/DrawerStore";
import SliderStore from "~/store/SliderStore";
import { NavData } from "~/data/NavData";
import { HomeHeroData } from "~/data/Home/HomeHeroData";
import { HomeServiceData } from "~/data/Home/HomeServiceData";
import { HomeMarqueeData } from "~/data/Home/HomeMarqueeData";
import { HomeContactData } from "~/data/Home/HomeContactData";

export const HomeContainer = () => {
  const drawer = useSnapshot(DrawerStore.state);
  const slider = useSnapshot(SliderStore.state);

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeServiceModuleProps: HomeServiceData,
    heroProps: HomeHeroData,
    homeSideDrawerModuleProps: {
      sideDrawerProps: {
        openSideDrawer: slider.open,
        onCloseSideDrawer() {
          SliderStore.close();
        },
      },
      onCloseSideDrawer() {
        SliderStore.close();
      },
      theme: slider.theme,
      projects: HomeProejctData,
      contacts: HomeContactData,
    },
    projectModuleProps: {
      projectComponentProp: {
        data: HomeProejctData,
      },
    },
    homeMarqueeModuleProps: HomeMarqueeData,
    homeTestimonialModuleProps: {
      homeTestimonialProps: {
        data: HomeTestimonialData,
      },
    },
    homePartnersModuleProps: {
      homePartnersProps: {
        title: "Over 32K+ software businesses growing with",
        partners: HomePartnertData,
      },
    },
    homeFeaturesModuleProps: {
      homeFeaturesProps: {
        data: HomeFeatureData,
      },
    },
    homeTeamModuleProps: {
      homeTeamProps: {
        data: HomeTeamData,
      },
    },
    homeVideoModuleProps: {
      homeVideoProps: {
        mask: "/images/video-mask.png",
        img: "/images/home/video.jpg",
      },
    },
    navBarModuleProps: {
      theme: true,
      navMenuProps: {
        links: NavData,
        theme: true,
      },
      navIconProps: {
        home: "home",
        theme: true,
      },
      navActionsProps: {
        showDrawer() {
          DrawerStore.open();
        },
        showSideDrawer() {
          SliderStore.open();
        },
        theme: true,
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
    footerModuleProps: {
      upperFooterProps: {
        logo: "logo",
      },
      lowerFooterProps: {},
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
