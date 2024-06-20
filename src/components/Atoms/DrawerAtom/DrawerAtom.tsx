import React, { ReactElement } from "react";
import { Drawer, Input } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";

type Props = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export const DrawerAtom = (props: Props) => {
  const SearchIcon = (
    <div className="left-auto right-[25px] top-[25px] bg-[#ff4a3b] p-2 text-white">
      <SearchOutlined
        style={{ color: "white", fontSize: 20, padding: "10px" }}
      />
    </div>
  );

  return (
    <>
      <Drawer
        // title={props.title}
        placement="top"
        closable={false}
        onClose={props.onClose}
        open={props.isOpen}
        height="100vh"
        className=""
        style={{
          backgroundColor: "rgba(0, 0, 0, .8)",
        }}
        rootClassName="pt-10"
        rootStyle={{ paddingTop: "10px" }}
      >
        <div className="flex flex-row justify-end ">
          <div
            className="left-auto right-[25px] top-[25px] rounded-full bg-[#ff4a3b] p-2 text-white"
            onClick={props.onClose}
          >
            <CloseOutlined
              style={{ color: "white", fontSize: 20, padding: "10px" }}
            />
          </div>
        </div>

        <div className="flex-coll flex justify-center align-middle h-max mt-[350px]">
          <Input
            placeholder="input search text"
            allowClear
            // enterButton="Search"
            size="large"
            // onSearch={props.onSearch}
            // style={}
            // styles={Input:{outerHeight: 100}}
            suffix={SearchIcon}
            className="w-[40%]"
          />
        </div>
        {/* {props.content} */}
      </Drawer>
    </>
  );
};
