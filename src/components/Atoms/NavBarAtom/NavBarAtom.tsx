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
    <div className="flex flex-row justify-between bg-white px-20 py-5">
      <div>
        <SVGAtom iconName="logoBlack" width={195} height={62} />
      </div>
      <div className="flex w-[35%] flex-row justify-between ">
        {navLinks.map((navItem: NavItem, navIndex: number) => (
          <div key={navIndex} className="justify-between">
            {navItem.children ? (
              <DropdownAtom name={navItem.name} child={navItem.children} />
            ) : (
              <Link className="underscore" href={navItem.url}>
                {navItem.name}
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="Seach">
        <p onClick={props.showDrawer}>Search</p>
      </div>
    </div>
  );
};
