import Image from "next/image";
import SVGAtom from "../SVGAtom/SVGAtom";
import Link from "next/link";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
import { DropdownAtom } from "../DropdownAtom/DropdownAtom";

type Props = {
  // Add props here
  showDrawer: () => void;
};

export type NavItem = {
  name: string;
  url: string;
  children?: NavItem[];
};

type MenuItem = {
  label: React.ReactNode;
  key: string;
  type?: "divider";
  disabled?: boolean;
};

type Nav = NavItem[];

const navLinks: Nav = [
  {
    name: "home",
    url: "./",
    children: [
      {
        name: "homePage1",
        url: "#",
      },
    ],
  },
  {
    name: "Pages",
    url: "./",
    children: [
      {
        name: "About Us",
        url: "#",
      },
      {
        name: "About Me",
        url: "#",
      },
      {
        name: "Service",
        url: "#",
      },
    ],
  },
  {
    name: "Portfolio",
    url: "./",
  },
  {
    name: "About Us",
    url: "./",
  },
];

export const NavBarAtom = (props: Props) => {
  return (
    <div className='flex flex-row items-center justify-between bg-white px-6 py-5 md:px-20'>
      <div>
        <SVGAtom iconName='logoBlack' width={195} height={62} />
      </div>
      <div className='hidden flex-1 justify-center md:flex'>
        <div className='flex flex-row space-x-6 md:space-x-5 lg:space-x-20'>
          {navLinks.map((navItem: NavItem, navIndex: number) => (
            <div key={navIndex}>
              {navItem.children ? (
                <DropdownAtom
                  name={navItem.name}
                  child={navItem.children}
                  className='md:text-sm lg:text-xl'
                />
              ) : (
                <Link
                  className='underscore space-mono-regular block font-normal md:text-sm lg:text-xl'
                  href={navItem.url}
                >
                  {navItem.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='text-right'>
        <p
          onClick={props.showDrawer}
          className='italiana-regular block cursor-pointer text-xl font-normal'
        >
          Search
        </p>
      </div>
    </div>
  );
};
