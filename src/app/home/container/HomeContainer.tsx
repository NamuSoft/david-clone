import { useState } from "react";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import { HomeProejctData } from "~/data/Home/HomeProjectData";
import { HomeTestimonialData } from "~/data/Home/HomeTestimonialData";
import { HomePartnertData } from "~/data/Home/HomePartnerData";
import { HomeFeatureData } from "~/data/Home/HomeFeatureData";
import { HomeTeamData } from "~/data/Home/HomeTeamData";

export const HomeContainer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSideDrawer, setOpenSideDrawer] = useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const showSideDrawer = () => {
    setOpenSideDrawer(true);
  };

  const onCloseSideDrawer = () => {
    setOpenSideDrawer(false);
  };
  const theme = true;
  const title = "Home";

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    title: "HomeContentModule",
    heroProps: {
      title,
    },
    projectModuleProps: {
      projectComponentProp: {
        data: HomeProejctData,
      },
    },
    homeTestimonialProps: {
      data: HomeTestimonialData,
    },
    homePartnersProps: {
      title: "Over 32K+ software businesses growing with",
      partners: HomePartnertData,
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
      navBarProps: {
        theme,
        showDrawer,
        showSideDrawer,
      },
      title,
      drawerProps: {
        theme,
        openDrawer,
        onCloseDrawer,
      },
      sideDrawerProps: {
        theme,
        openSideDrawer,
        onCloseSideDrawer,
      },
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
