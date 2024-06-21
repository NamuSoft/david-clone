import { useState } from "react";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

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
  const title = "Home"
  
  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    
    homeContentModuleProps: {
      title: "HomeContentModule", heroProps: {
      title
    } },
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
