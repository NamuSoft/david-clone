import { SideDrawerAtom } from "~/components/Atoms/SideDrawerAtom/SideDrawerAtom";
import { ArrowUpOutlined, CloseOutlined } from "@ant-design/icons";
import { Image, Input } from "antd";

import "./custom.css";
import { ResponsiveImgAtom } from "~/components/Atoms/ResponsiveImgAtom/ResponsiveImgAtom";
import { type ProjectAtom } from "~/components/Atoms/ProjectAtom/ProjectAtom";
import { ReactNode } from "react";

export type Contacts = {
  Icon: React.ElementType;
  info1: string;
  info2?: string;
}[];

type Props = {
  sideDrawerProps: React.ComponentProps<typeof SideDrawerAtom>;
  onCloseSideDrawer: () => void;
  theme: boolean;
  projects: React.ComponentProps<typeof ProjectAtom>[];
  contacts: Contacts;
};

export const HomeSideDrawerModule = (props: Props) => {
  const SearchIcon = (
    <div className='left-auto right-[25px] top-[25px] bg-[#ff4a3b] p-1 text-white'>
      <ArrowUpOutlined
        style={{ color: "white", fontSize: 20, padding: "10px" }}
      />
    </div>
  );

  return (
    <SideDrawerAtom {...props.sideDrawerProps}>
      <div className='flex flex-row justify-end'>
        <div
          className='left-auto right-[25px] top-[25px] rounded-[3px] bg-[#333] text-white'
          onClick={props.onCloseSideDrawer}
        >
          <CloseOutlined
            style={{ color: "white", fontSize: 20, padding: "10px" }}
          />
        </div>
      </div>

      <div className='flex h-max flex-col justify-center p-2 align-middle'>
        <ResponsiveImgAtom
          src='/svgs/logo.svg'
          width={195}
          height={62}
          alt=''
          className='mb-[40px] mt-2'
        />
        <h3 className='italiana-regular mb-6 text-[1.56rem] font-normal leading-8 text-[#fff]'>
          Our Latest Project
        </h3>
        <div className='mb-8 grid grid-cols-3 gap-2'>
          {props.projects.map((item, index) => (
            <Image
              src={item.image}
              width={"100%"}
              height={"75px"}
              style={{ borderRadius: "5px", objectFit: "cover" }}
              key={index}
              alt='img'
            />
          ))}
        </div>
        <h3 className='italiana-regular mb-6 text-[1.56rem] font-normal leading-8 text-[#fff]'>
          Contact Us
        </h3>
        <div className='mb-6'>
          {props.contacts.map((item, index) => (
            <div
              key={index}
              className='space-mono-regular flex flex-row pb-3.5 align-baseline text-[#fff]'
            >
              <item.Icon
                style={{ fontSize: "16px", alignContent: "flex-start" }}
              />
              <span>
                {item.info1}
                {item.info2 && (
                  <>
                    <br />
                    {item.info2}
                  </>
                )}
              </span>
            </div>
          ))}
        </div>

        <h3 className='italiana-regular mb-6 text-[1.56rem] font-normal leading-8 text-[#fff]'>
          NewsLetter
        </h3>
        <Input
          placeholder='Email Address *'
          allowClear
          size='middle'
          suffix={SearchIcon}
          className='w-[100%] rounded-none p-0'
          styles={{
            input: { fontSize: "large", paddingLeft: "10px" },
          }}
        />
      </div>
    </SideDrawerAtom>
  );
};
