import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

type Props = {
  // Add props here
  showDrawer: () => void;
  showSideDrawer: () => void;
  // closeDrawer: () => void;
  theme: boolean;
};

export const NavActions = (props: Props) => {
  return (
    <div className='header-area-right'>
      <ul className=''>
        {props.theme ? (
          <>
            <li className='flex-center w-fill'>
              <SearchOutlined
                onClick={props.showDrawer}
                className=' text-[30px] text-[#ff4a3b] lg:text-[40px]'
              />
            </li>
            <li>
              <div className='' onClick={props.showSideDrawer}>
                <MenuOutlined
                  style={{ color: "#fff", fontSize: 22 }}
                  className='ml-5 md:ml-10'
                />
              </div>
            </li>
          </>
        ) : (
          <li>
            <p
              onClick={props.showDrawer}
              className='italiana-regular nav-search-txt  mb-0 cursor-pointer text-center'
            >
              Search
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};
