import React from "react";
import { DropdownNavAtom } from "../DropdownNavAtom/DropdownNavAtom";
import { LinkAtom } from "../LinkAtom/LinkAtom";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { ResponsiveImgAtom } from "../ResponsiveImgAtom/ResponsiveImgAtom";
import "./custom.css";

type Props = {
  // Add props here
  showDrawer: () => void;
  showSideDrawer: () => void;
  links: NavItem[];
  // closeDrawer: () => void;
  theme: boolean;
  home: string;
};

export type NavItem = {
  name: string;
  url: string;
  children?: NavItem[];
};

export const NavBarAtom = (props: Props) => {
  return (
    <div
      className={`header-area  ${props.theme ? "bg-base-black text-white" : "base-black bg-white"} `}
    >
      <div className='menue-area'>
        <div className='container-fluid'>
          <div className='second-menu'>
            <div className='flex flex-row items-center justify-between'>
              <div className='w-3/5 pl-4 pr-4  md:w-3/5 lg:w-1/5 xl:w-1/5'>
                <div className='logo'>
                  <LinkAtom href={props.home}>
                    <ResponsiveImgAtom
                      src={`/svgs/${props.theme ? "logo" : "logoBlack"}.svg`}
                      width={195}
                      height={62}
                      alt=''
                    />
                  </LinkAtom>
                </div>
              </div>
              <div className='hidden w-1/6  pl-4 pr-4 text-right md:w-1/6 lg:block lg:w-2/3 xl:w-2/3 xl:text-right'>
                <div className='main-menu'>
                  <div className='mobile-menu'>
                    <ul className='nav justify-center'>
                      {props.links.map((item, index) => (
                        <DropdownNavAtom
                          item={item}
                          key={index}
                          theme={props.theme}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='w-1/4 pl-4 pr-4 text-left md:w-1/3 lg:w-1/5 xl:w-1/5'>
                <div className='header-area-right'>
                  <ul>
                    {props.theme ? (
                      <>
                        <li className='flex-center'>
                          <SearchOutlined
                            style={{ color: "#ff4a3b", fontSize: 40 }}
                            onClick={props.showDrawer}
                            className='nav-icon search-toggle-btn'
                          />
                        </li>
                        <li>
                          <div
                            className='nav-icon right-menu-toggle-btn '
                            onClick={props.showSideDrawer}
                          >
                            <MenuOutlined
                              style={{ color: "#fff", fontSize: 22 }}
                            />
                          </div>
                        </li>
                      </>
                    ) : (
                      <li>
                        <p
                          onClick={props.showDrawer}
                          className='italiana-regular nav-search-txt  cursor-pointer'
                        >
                          Search
                        </p>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------- */}
      {/* <div className=''>
        <SVGAtom
          iconName={props.theme ? "logo" : "logoBlack"}
          width={195}
          height={62}
        />
      </div>
      <div className='hidden flex-1 justify-center lg:flex'>
        <div className='flex flex-row space-x-6 lg:space-x-10 xl:space-x-20'>
          {props.links.map((navItem: NavItem, navIndex: number) => (
            <div key={navIndex}>
              {navItem.children ? (
                <DropdownAtom
                  name={navItem.name}
                  child={navItem.children}
                  className='lg:text-sm xl:text-xl'
                />
              ) : (
                <Link
                  className='underscore space-mono-regular block font-normal lg:text-sm xl:text-xl'
                  href={navItem.url}
                >
                  {navItem.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='justify-center md:flex'>
        {props.theme ? (
          <div className='flex flex-row space-x-6 md:space-x-5 lg:space-x-5'>
            <SearchOutlined
              style={{ color: "#ff4a3b", fontSize: 40 }}
              onClick={props.showDrawer}
            />
            <div
              className='flex h-[52px] w-[52px] cursor-pointer flex-row justify-center rounded-full border-[#ff4a3b] align-middle lg:border'
              onClick={props.showSideDrawer}
            >
              <MenuOutlined style={{ color: "#fff", fontSize: 22 }} />
            </div>
          </div>
        ) : (

        )}
      </div> */}
    </div>
  );
};
