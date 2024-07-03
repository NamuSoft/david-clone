import { Blog_singleTemplate } from "~/components/Templates/Blog_single/Blog_singleTemplate";
import DrawerStore from "~/store/DrawerStore";
import { NavData } from "~/data/NavData";
import SliderStore from "~/store/SliderStore";
import { useSnapshot } from "valtio";
import { notFound, useParams } from "next/navigation";
import { findBlogByLink } from "~/utils/common";
import { BlogData } from "~/data/Blog/BlogData";
import { CommonBlogData } from "~/data/Blog/CommonBlogData";

export const Blog_singleContainer = () => {
  const { id } = useParams<{ id: string }>();
  const drawer = useSnapshot(DrawerStore.state);
  const blogData = findBlogByLink(BlogData, id);
  if (!blogData) {
    notFound();
  }

  const blog_singleTemplateProps: React.ComponentProps<
    typeof Blog_singleTemplate
  > = {
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
        title: "Blog Details",
        nav: ["home", "Blog", "#"],
      },
    },
    footerModuleProps: {
      upperFooterProps: {
        logo: "logo",
      },
      lowerFooterProps: {},
    },
    blog_singleContentModuleProps: {
      blog: blogData,
      common: CommonBlogData,
    },
  };

  return <Blog_singleTemplate {...blog_singleTemplateProps} />;
};
