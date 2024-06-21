import React, { useEffect, useState } from "react";
import { Drawer, Image, Input } from "antd";
import { ArrowUpOutlined, CloseOutlined, HomeOutlined, MailOutlined, PhoneOutlined, SearchOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  // title: string;
  openSideDrawer: boolean;
  onCloseSideDrawer: () => void;
  theme: boolean;
};

const projects = [
  {
    img: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-1.974b50aa.jpg&w=750&q=75",
    url: "#",
  },
  {
    img: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-2.55342e59.jpg&w=750&q=75",
    url: "#",
  },
  {
    img: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-3.fd0560d6.jpg&w=750&q=75",
    url: "#",
  },
  {
    img: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-4.ef302e71.jpg&w=750&q=75",
    url: "#",
  },
  {
    img: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-2.55342e59.jpg&w=750&q=75",
    url: "#",
  },
  {
    img: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-2.55342e59.jpg&w=750&q=75",
    url: "#",
  },
];
export const SideDrawerAtom = (props: Props) => {


  const SearchIcon = (
    <div className='left-auto right-[25px] top-[25px] bg-[#ff4a3b] p-1  text-white'>
      <ArrowUpOutlined
        style={{ color: "white", fontSize: 20, padding: "10px" }}
      />
    </div>
  );

  return (
    <>
      <Drawer
        placement='right'
        closable={false}
        onClose={props.onCloseSideDrawer}
        open={props.openSideDrawer}
        height='100vh'
        width={"420px"}
        className={`custom-drawer `}
        style={{
          backgroundColor: "#1f1f1f",
        }}
        rootClassName='pt-10'
        rootStyle={{ paddingTop: "10px" }}
      >
        <div className='flex flex-row justify-end '>
          <div
            className='left-auto right-[25px] top-[25px] rounded-[3px] bg-[#333]  text-white'
            onClick={props.onCloseSideDrawer}
          >
            <CloseOutlined
              style={{ color: "white", fontSize: 20, padding: "10px" }}
            />
          </div>
        </div>

        <div className='flex h-max flex-col justify-center p-5 align-middle'>
          <SVGAtom
            iconName={props.theme ? "logo" : "logoBlack"}
            width={195}
            height={62}
            className='mb-[40px] mt-2 '
          />
          <h3 className='italiana-regular mb-6 text-[1.56rem] font-normal leading-8 text-[#fff]'>
            Our Latest Project
          </h3>
          <div className='mb-8  grid grid-cols-3 gap-2'>
            {projects.map((item) => (
              <Image
                src={`https://unded-next.netlify.app${item.img}`}
                width={"100%"}
                height={"75px"}
                style={{ borderRadius: "5px", objectFit: "cover" }}
                key={item.img}
                alt='img'
              />
            ))}
          </div>
          <h3 className='italiana-regular mb-6 text-[1.56rem] font-normal leading-8 text-[#fff]'>
            contact Us
          </h3>
          <div className='mb-6'>
            <div className='space-mono-regular flex flex-row pb-3.5  align-baseline text-base text-[#fff]'>
              <MailOutlined
                style={{ fontSize: "16px", alignContent: "flex-start" }}
              />
              <span className='pl-5'>
                {" "}
                68D, Belsion Town 2365
                <br />
                Fna city, LH 3656, USA
              </span>
            </div>

            <div className='space-mono-regular flex flex-row pb-3.5  align-baseline text-base text-[#fff]'>
              <PhoneOutlined
                style={{ fontSize: "16px", alignContent: "flex-start" }}
              />
              <span className='pl-5'>
                {" "}
                + 1 (246) 333-0088
                <br />+ 1 (246) 333-0088
              </span>
            </div>

            <div className='space-mono-regular flex flex-row pb-3.5  align-baseline text-base text-[#fff]'>
              <HomeOutlined
                style={{ fontSize: "16px", alignContent: "flex-start" }}
              />
              <span className='pl-5'> alma.lawson@example.com</span>
            </div>
          </div>

          <h3 className='italiana-regular mb-6 text-[1.56rem] font-normal leading-8 text-[#fff]'>
            NewsLetter
          </h3>
          <Input
            placeholder='Email Address *'
            allowClear
            size='middle'
            suffix={SearchIcon}
            className=' rounded-none p-0 w-[100%]'
            styles={{
              input: {  fontSize: "large", paddingLeft:"10px"},
            }}
          />
        </div>
      </Drawer>
    </>
  );
};
