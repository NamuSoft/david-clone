import { notFound, useParams } from "next/navigation";
import { Project_singleTemplate } from "~/components/Templates/Project_single/Project_singleTemplate";
import DrawerStore from "~/store/DrawerStore";
import { NavData } from "~/data/NavData";
import SliderStore from "~/store/SliderStore";
import { useSnapshot } from "valtio";
import { fomartTitle } from "~/utils/common";
import { ProjectsData } from "~/data/projects/ProjectsData";
import { PortfolioData } from "~/data/Portfolio/PortfolioData";

export const Project_singleContainer = () => {
  const { name } = useParams<{ name: string }>();
  const drawer = useSnapshot(DrawerStore.state);
  let detailsData;
  if (ProjectsData[name] === undefined) {
    notFound();
  } else {
    detailsData = ProjectsData[name];
  }

  const project_singleTemplateProps: React.ComponentProps<
    typeof Project_singleTemplate
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
        title: fomartTitle(name),
        nav: ["Projects", name, "#"],
      },
    },
    footerModuleProps: {
      upperFooterProps: {
        logo: "logo",
      },
      lowerFooterProps: {},
    },
    project_singleContentModuleProps: {
      details: {
        data: ProjectsData[name],
      },
      recent: {
        title: {
          title: "Related Work",
          subtitle: "Recent Portfolio",
        },
        data: PortfolioData,
      },
    },
  };

  return <Project_singleTemplate {...project_singleTemplateProps} />;
};
