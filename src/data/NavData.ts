import { type NavItem } from "~/components/Components/NavMenu/NavMenu";

export const NavData: NavItem[] = [
  {
    name: "home",
    url: "/home",
  },
  {
    name: "Pages",
    url: "/AboutMe",
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
    url: "/portfolio",
  },
  {
    name: "Blog",
    url: "/Blog",
  },
  {
    name: "Contact",
    url: "/Contact",
  },
];
