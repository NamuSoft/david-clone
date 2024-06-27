import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import { HomeProejctData } from "~/data/Home/HomeProjectData";
import { HomeTestimonialData } from "~/data/Home/HomeTestimonialData";
import { HomePartnertData } from "~/data/Home/HomePartnerData";
import { HomeFeatureData } from "~/data/Home/HomeFeatureData";
import { HomeTeamData } from "~/data/Home/HomeTeamData";
import { useSnapshot } from "valtio";
import DrawerStore from "~/store/DrawerStore";
import SliderStore from "~/store/SliderStore";
import NavStore from "~/store/NavStore";
import { NavData } from "~/data/NavData";
import { HomeHeroData } from "~/data/Home/HomeHeroData";
import { HomeServiceData } from "~/data/Home/HomeServiceData";
import { HomeMarqueeData } from "~/data/Home/HomeMarqueeData";

export const HomeContainer = () => {
  const nav = useSnapshot(NavStore.state);
  const drawer = useSnapshot(DrawerStore.state);
  const slider = useSnapshot(SliderStore.state);

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    title: "Home",
    homeServiceModuleProps: HomeServiceData,
    heroProps: HomeHeroData,
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
    homeHeaderModuleProps: {
      title: "",
      navBarProps: {
        home: "/",
        showDrawer() {
          DrawerStore.open();
        },
        showSideDrawer() {
          SliderStore.open();
        },
        links: NavData,
        theme: true,
        // theme: nav.theme,
      },
      drawerProps: {
        openDrawer: drawer.open,
        theme: drawer.theme,
        onCloseDrawer() {
          DrawerStore.close();
        },
      },
      sideDrawerProps: {
        openSideDrawer: slider.open,
        onCloseSideDrawer() {
          SliderStore.close();
        },
        theme: slider.theme,
        projects: HomeProejctData,
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
