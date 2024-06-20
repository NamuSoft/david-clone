import { Drawer } from "antd";
import { useState } from "react";
import { DrawerAtom } from "~/components/Atoms/DrawerAtom/DrawerAtom";
import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";
import { NavBarAtom } from "~/components/Atoms/NavBarAtom/NavBarAtom";

type Props = {
  title: string;
};

export const HomeHeaderModule = (props: Props) => {
      const [open, setOpen] = useState(false);

      const showDrawer = () => {
        setOpen(true);
      };

      const onClose = () => {
        setOpen(false);
  };
  

  return (
    <>
      <NavBarAtom showDrawer={showDrawer} />
      <HeaderAtom/>
      <DrawerAtom title="search" onClose={onClose} isOpen={open} />
    </>
  );
};
