import { type AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";

type Props = {
  icon: React.ComponentType<AntdIconProps>;
  text: string;
};

export const OfficeItemAtom = (props: Props) => {
  return (
    <div className='space-mono-regular text-[calc(1rem + 0px)] relative mb-[30px] flex flex-row justify-center pl-[30px] text-[#1f1f1f] md:justify-start'>
      <div className='mb-[10px] '>
        <props.icon
          className=' pr-4   text-[20px] font-normal text-[#ff4a3b] antialiased
'
        />
      </div>
      <div>{props.text}</div>
    </div>
  );
};
