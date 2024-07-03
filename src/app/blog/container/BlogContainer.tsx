import { BlogTemplate } from "~/components/Templates/Blog/BlogTemplate";
import DrawerStore from "~/store/DrawerStore";
import { NavData } from "~/data/NavData";
import SliderStore from "~/store/SliderStore";
import { useSnapshot } from "valtio";
import { NewsLetterData } from "~/data/Portfolio/newsLettereData";

export const BlogContainer = () => {
  const drawer = useSnapshot(DrawerStore.state);

  const blogTemplateProps: React.ComponentProps<typeof BlogTemplate> = {
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
        title: "Blog",
        nav: ["Home", "blog", "#"],
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
    blogContentModuleProps: { title: "BlogContentModule" },
  };

  return <BlogTemplate {...blogTemplateProps} />;
};
