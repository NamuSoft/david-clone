import React, { useEffect, useState } from "react";
import { Drawer, Image, Input } from "antd";
import { ArrowUpOutlined, CloseOutlined, HomeOutlined, MailOutlined, PhoneOutlined, SearchOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";
import { ResponsiveImgAtom } from "../ResponsiveImgAtom/ResponsiveImgAtom";
import { type ProjectAtom } from "../ProjectAtom/ProjectAtom";
import "./custom.css";

type Props = {
  // title: string;
  openSideDrawer: boolean;
  onCloseSideDrawer: () => void;
  theme: boolean;
  projects: React.ComponentProps<typeof ProjectAtom>[];
};

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

        <div className='flex h-max flex-col justify-center p-2 align-middle'>
          <ResponsiveImgAtom
            src='/svgs/logo.svg'
            width={195}
            height={62}
            alt=''
            className='mb-[40px] mt-2 '
          />
          <h3 className='italiana-regular mb-6 text-[1.56rem] font-normal leading-8 text-[#fff]'>
            Our Latest Project
          </h3>
          <div className='mb-8  grid grid-cols-3 gap-2'>
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
            contact Us
          </h3>
          <div className='mb-6'>
            <div className='space-mono-regular flex flex-row pb-3.5  align-baseline  text-[#fff]'>
              <MailOutlined
                style={{ fontSize: "16px", alignContent: "flex-start" }}
              />
              <span>
                {" "}
                68D, Belsion Town 2365
                <br />
                Fna city, LH 3656, USA
              </span>
            </div>

            <div className='space-mono-regular flex flex-row pb-3.5  align-baseline  text-[#fff]'>
              <PhoneOutlined
                style={{ fontSize: "16px", alignContent: "flex-start" }}
              />
              <span>
                {" "}
                + 1 (246) 333-0088
                <br />+ 1 (246) 333-0088
              </span>
            </div>

            <div className='space-mono-regular flex flex-row pb-3.5  align-baseline  text-[#fff]'>
              <HomeOutlined
                style={{ fontSize: "16px", alignContent: "flex-start" }}
              />
              <span> alma.lawson@example.com</span>
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
            className=' w-[100%] rounded-none p-0'
            styles={{
              input: { fontSize: "large", paddingLeft: "10px" },
            }}
          />
        </div>
      </Drawer>
    </>
  );
};
