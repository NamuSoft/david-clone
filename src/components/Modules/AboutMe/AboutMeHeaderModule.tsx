import { DrawerAtom } from "~/components/Atoms/DrawerAtom/DrawerAtom";
import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";
import { NavBarAtom } from "~/components/Atoms/NavBarAtom/NavBarAtom";
import { SideDrawerAtom } from "~/components/Atoms/SideDrawerAtom/SideDrawerAtom";
import "./custom.css";
type Props = {
  navBarProps: React.ComponentProps<typeof NavBarAtom>;
  drawerProps: React.ComponentProps<typeof DrawerAtom>;
  sideDrawerProps: React.ComponentProps<typeof SideDrawerAtom>;
  headerProps: React.ComponentProps<typeof HeaderAtom>;
};

export const AboutMeHeaderModule = (props: Props) => {
  return (
    <div>
      <NavBarAtom {...props.navBarProps} />
      <HeaderAtom {...props.headerProps} />
      <DrawerAtom {...props.drawerProps} />
      <SideDrawerAtom {...props.sideDrawerProps} />
    </div>
  );
};
