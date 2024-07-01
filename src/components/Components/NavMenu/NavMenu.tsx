import { DropdownNavAtom } from "~/components/Atoms/DropdownNavAtom/DropdownNavAtom";

type Props = {
  // Add props here
  links: NavItem[];
  theme: boolean;
};

export type NavItem = {
  name: string;
  url: string;
  children?: NavItem[];
};

export const NavMenu = (props: Props) => {
  return (
    <div className='main-menu'>
      <div className='mobile-menu'>
        <ul className='nav justify-center'>
          {props.links.map((item, index) => (
            <DropdownNavAtom item={item} key={index} theme={props.theme} />
          ))}
        </ul>
      </div>
    </div>
  );
};
