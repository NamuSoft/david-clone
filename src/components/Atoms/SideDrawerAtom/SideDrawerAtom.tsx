import { Drawer } from "antd";
import "./custom.css";
import { type PropsWithChildren } from "react";

type Props = {
  // title: string;
  openSideDrawer: boolean;
  onCloseSideDrawer: () => void;
};

export const SideDrawerAtom = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <Drawer
        placement='right'
        closable={false}
        onClose={props.onCloseSideDrawer}
        open={props.openSideDrawer}
        height='100vh'
        width={"420px"}
        className={`custom-drawer `}
        style={{
          backgroundColor: "#1f1f1f",
        }}
        rootClassName='pt-10'
        rootStyle={{ paddingTop: "10px" }}
      >
        {props.children}
      </Drawer>
    </>
  );
};
