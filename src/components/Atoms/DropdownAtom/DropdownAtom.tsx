import { Dropdown, Space } from "antd";
import type { NavItem} from '../NavBarAtom/NavBarAtom';
type Props = {
  // Add props here
  child:  NavItem['children'];
  name: string;
    };

export const DropdownAtom = (props: Props) => {
    const getItem = (child: NavItem, index: number) => ({
      label: (
        <a target="_blank" rel="noopener noreferrer" href={child.url}>
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
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>{props.name}</Space>
        </a>
      </Dropdown>
    </>
  );
};