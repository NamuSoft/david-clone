import React from "react";

import "./custom.css";
import { NavMenu } from "~/components/Components/NavMenu/NavMenu";
import { NavActions } from "~/components/Components/NavActions/NavActions";
import { NavIcon } from "~/components/Components/NavIcon/NavIcon";

type Props = {
  // closeDrawer: () => void;
  theme: boolean;
  navMenuProps: React.ComponentProps<typeof NavMenu>;
  navActionsProps: React.ComponentProps<typeof NavActions>;
  navIconProps: React.ComponentProps<typeof NavIcon>;
};

export const NavBarModule = (props: Props) => {
  return (
    <div
      className={`header-area  ${props.theme ? "bg-base-black text-white" : "base-black bg-white"} `}
    >
      <div className='menue-area'>
        <div className='container-fluid'>
          <div className='second-menu'>
            <div className='flex flex-row items-center justify-between'>
              <div className='w-3/5 pl-4 pr-4  md:w-3/5 lg:w-1/5 xl:w-1/5'>
                <NavIcon {...props.navIconProps} theme={props.theme} />
              </div>
              <div className='hidden w-1/6  pl-4 pr-4 text-right md:w-1/6 lg:block lg:w-2/3 xl:w-2/3 xl:text-right'>
                <NavMenu {...props.navMenuProps} theme={props.theme} />
              </div>
              <div className='w-1/4 pl-4 pr-4 text-left md:w-1/3 lg:w-1/5 xl:w-1/5'>
                <NavActions {...props.navActionsProps} theme={props.theme} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
