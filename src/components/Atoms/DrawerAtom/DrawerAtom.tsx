import { type PropsWithChildren, useEffect, useState } from "react";
import { Drawer } from "antd";
import "./custom.css";
type Props = {
  // title: string;
  openDrawer: boolean;
  onCloseDrawer: () => void;
};

export const DrawerAtom = (props: PropsWithChildren<Props>) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (props.openDrawer) {
      setAnimationClass("animate-slideIn");
    } else {
      setAnimationClass("animate-slideOut");
    }
  }, [props.openDrawer]);

  return (
    <>
      <Drawer
        placement='top'
        closable={false}
        onClose={props.onCloseDrawer}
        open={props.openDrawer}
        height='100vh'
        className={` ${props.openDrawer && "active"} header-search-form custom-drawer ${animationClass}`}
        style={{
          backgroundColor: "rgba(0, 0, 0, .8)",
        }}
        rootClassName='pt-10'
        rootStyle={{ paddingTop: "10px" }}
      >
        {props.children}
      </Drawer>
    </>
  );
};
