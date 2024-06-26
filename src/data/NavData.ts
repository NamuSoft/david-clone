import type { NavItem } from "~/components/Atoms/NavBarAtom/NavBarAtom";

export const NavData: NavItem[] = [
  {
    name: "home",
    url: "/Home",
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
    url: "/Portfolio",
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
