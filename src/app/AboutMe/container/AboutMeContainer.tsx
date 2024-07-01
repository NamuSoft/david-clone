import { useSnapshot } from "valtio";
import { AboutMeTemplate } from "~/components/Templates/AboutMe/AboutMeTemplate";
import { NavData } from "~/data/NavData";
import DrawerStore from "~/store/DrawerStore";
import SliderStore from "~/store/SliderStore";
import { AboutContentData } from "~/data/About/AboutContentData";
import { AboutEventData } from "~/data/About/AboutEventData";
import { AboutServiceData } from "~/data/About/AboutServiceData";

export const AboutMeContainer = () => {
  const drawer = useSnapshot(DrawerStore.state);
  const aboutmeTemplateProps: React.ComponentProps<typeof AboutMeTemplate> = {
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
    aboutMeHeaderModuleProps: {
      headerProps: {
        title: "About me",
        nav: ["Pages", "About Me", "#"],
      },
    },
    aboutMeContentModuleProps: {
      title: "AboutMe contentModule",
      aboutContentProps: AboutContentData,
      eventProps: {
        eventsData: AboutEventData,
      },
      serviceProps: {
        data: AboutServiceData,
      },
      image: "/images/profile.png",
    },
    footerModuleProps: {
      upperFooterProps: {
        logo: "logo",
      },
      lowerFooterProps: {},
    },
  };

  return <AboutMeTemplate {...aboutmeTemplateProps} />;
};
