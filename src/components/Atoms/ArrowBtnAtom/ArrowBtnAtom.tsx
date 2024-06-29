import Icon from "@ant-design/icons/lib/components/Icon";
import { LinkAtom } from "../LinkAtom/LinkAtom";
import { ArrowRightOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "./custom.css";

type Props = {
  // Add props here
  href: string;
};

export const ArrowBtnAtom = (props: Props) => {
  return (
    <LinkAtom
      href={props.href}
      className='link-atom  flex h-[60px] w-[60px] items-center justify-center rounded-[5px] bg-[#333] transition-all duration-[300ms]'
    >
      <div className=''>
        <ArrowRightOutlined className='rotate-icon text-[20px] text-white' />
      </div>
    </LinkAtom>
  );
};
