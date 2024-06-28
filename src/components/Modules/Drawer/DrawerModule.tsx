import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import "./custom.css";
import { DrawerAtom } from "~/components/Atoms/DrawerAtom/DrawerAtom";
import { Input } from "antd";

type Props = {
  openDrawer: boolean;
  onCloseDrawer: () => void;
  drawerProps: React.ComponentProps<typeof DrawerAtom>;
};

export const DrawerModule = (props: Props) => {
  const SearchIcon = (
    <div className='left-auto right-[25px] top-[25px] rounded-e-full bg-[#ff4a3b] p-4 text-white'>
      <SearchOutlined
        style={{ color: "white", fontSize: 20, padding: "10px" }}
      />
    </div>
  );
  return (
    <DrawerAtom {...props.drawerProps}>
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
    </DrawerAtom>
  );
};
