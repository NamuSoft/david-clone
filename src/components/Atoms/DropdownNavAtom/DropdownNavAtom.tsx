// DropdownNavItem.tsx
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./custom.css";
import { LinkAtom } from "../LinkAtom/LinkAtom";
import { type NavItem } from "~/components/Components/NavMenu/NavMenu";

type Props = {
  item: NavItem;
  theme: boolean;
};

export const DropdownNavAtom = ({ item, theme }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`dropdown-nav   items-center  ${theme ? "bg-base-black text-white" : "base-black bg-white"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LinkAtom
        href={item.url}
        className={`relative  ${theme ? "bg-base-black text-white" : "base-black bg-white"}`}
      >
        {item.name}
      </LinkAtom>
      {item.children && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className={`sub-menu absolute left-0 z-50  w-48  ${theme ? "bg-base-black text-white" : "base-black bg-white"}`}
          // style={{backgroundColor}}
        >
          {item.children.map((child, index) => (
            <li key={index}>
              <Link href={child.url} className='block px-4 py-2'>
                {child.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </li>
  );
};
