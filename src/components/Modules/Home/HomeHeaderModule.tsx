import { Drawer } from "antd";
import { useState } from "react";
import { DrawerAtom } from "~/components/Atoms/DrawerAtom/DrawerAtom";
import { SideDrawerAtom } from "~/components/Atoms/SideDrawerAtom/SideDrawerAtom";
import { NavBarAtom } from "~/components/Atoms/NavBarAtom/NavBarAtom";

type Props = {
  navBarProps: React.ComponentProps<typeof NavBarAtom>;
};

export const HomeHeaderModule = (props: Props) => {
  return (
    <>
      <NavBarAtom {...props.navBarProps} />
    </>
  );
};
