import { ContactTemplate } from "~/components/Templates/Contact/ContactTemplate";
import { useSnapshot } from "valtio";
import DrawerStore from "~/store/DrawerStore";
import { NavData } from "~/data/NavData";
import SliderStore from "~/store/SliderStore";
import { NewsLetterData } from "~/data/Portfolio/newsLettereData";
import { OfficeInfoData } from "~/data/OfficeInfoData";
export const ContactContainer = () => {
  const drawer = useSnapshot(DrawerStore.state);

  const contactTemplateProps: React.ComponentProps<typeof ContactTemplate> = {
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
        title: "Contact Us",
        nav: ["Home", "Contact", "#"],
      },
    },
    footerModuleProps: {
      upperFooterProps: {
        logo: "logo",
      },
      lowerFooterProps: {},
    },
    newsletterModuleProps: {
      newsLetterProps: NewsLetterData,
    },
    contactMapModuleProps: { title: "ContactMapModule" },
    contactInfoModuleProps: {
      title: "Subscribe to our newsletter for updates",
      subTitle: "News Letter",
      officeData: OfficeInfoData,
    },
  };

  return <ContactTemplate {...contactTemplateProps} />;
};
