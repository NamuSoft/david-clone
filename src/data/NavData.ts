import { type NavItem } from "~/components/Components/NavMenu/NavMenu";

export const NavData: NavItem[] = [
  {
    name: "home",
    url: "/home",
  },
  {
    name: "pages",
    url: "/AboutMe",
    children: [
      {
        name: "about us",
        url: "#",
      },
      {
        name: "about me",
        url: "#",
      },
      {
        name: "service",
        url: "#",
      },
    ],
  },
  {
    name: "portfolio",
    url: "/portfolio",
  },
  {
    name: "blog",
    url: "/blog",
  },
  {
    name: "contact",
    url: "/Contact",
  },
];
