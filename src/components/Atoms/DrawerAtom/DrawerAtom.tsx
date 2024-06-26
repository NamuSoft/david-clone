import React, { useEffect, useState } from "react";
import { Drawer, Input } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import "./custom.css";
type Props = {
  // title: string;
  openDrawer: boolean;
  onCloseDrawer: () => void;
  theme: boolean;
};

export const DrawerAtom = (props: Props) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (props.openDrawer) {
      setAnimationClass("animate-slideIn");
    } else {
      setAnimationClass("animate-slideOut");
    }
  }, [props.openDrawer]);

  const SearchIcon = (
    <div className='left-auto right-[25px] top-[25px] rounded-e-full bg-[#ff4a3b] p-4 text-white'>
      <SearchOutlined
        style={{ color: "white", fontSize: 20, padding: "10px" }}
      />
    </div>
  );

  return (
    <>
      <Drawer
        placement='top'
        closable={false}
        onClose={props.onCloseDrawer}
        open={props.openDrawer}
        height='100vh'
        className={` ${props.openDrawer && "active"} header-search-form custom-drawer ${animationClass}`}
        style={{
          backgroundColor: "rgba(0, 0, 0, .8)",
        }}
        rootClassName='pt-10'
        rootStyle={{ paddingTop: "10px" }}
      >
        <div className='flex flex-row justify-end '>
          <div
            className='left-auto right-[25px] top-[25px] rounded-full bg-[#ff4a3b] p-2 text-white'
            onClick={props.onCloseDrawer}
          >
            <CloseOutlined
              style={{ color: "white", fontSize: 20, padding: "10px" }}
            />
          </div>
        </div>

        <div
          className={` flex-coll form mt-[350px] flex h-max justify-center align-middle`}
        >
          <Input
            placeholder='Search Here'
            allowClear
            size='large'
            suffix={SearchIcon}
            className='rounded-full p-0 sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[40%]'
            styles={{
              input: { padding: 20, fontSize: "medium" },
              suffix: {
                overflow: "hidden",
              },
            }}
          />
        </div>
      </Drawer>
    </>
  );
};
