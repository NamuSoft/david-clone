import { Dropdown, Space } from "antd";
import type { NavItem} from '../NavBarAtom/NavBarAtom';
type Props = {
  // Add props here
  child:  NavItem['children'];
  name: string;
  className?: string;
    };

export const DropdownAtom = (props: Props) => {
    const getItem = (child: NavItem, index: number) => ({
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='space-mono-regular base-black text-lg  rounded-none m-10 '
          href={child.url}
        >
          {child.name}
        </a>
      ),
      key: `${index}`,
    });
  return (
    <>
      {" "}
      <Dropdown
        menu={{
          items: props.child?.map((item, index) => getItem(item, index)),
        }}
        className={`underscore space-mono-regular block text-xl font-normal ${props.className}`}
        dropdownRender={(menus) => (
          <div className="pt-8 rounded-none bg-white " >
            {menus}
          </div>
        )}
        placement="bottom"
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>{props.name}</Space>
        </a>
      </Dropdown>
    </>
  );
};