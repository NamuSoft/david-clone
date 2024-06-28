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
      <ul>
        {props.theme ? (
          <>
            <li className='flex-center'>
              <SearchOutlined
                style={{ color: "#ff4a3b", fontSize: 40 }}
                onClick={props.showDrawer}
                className='nav-icon search-toggle-btn'
              />
            </li>
            <li>
              <div
                className='nav-icon right-menu-toggle-btn '
                onClick={props.showSideDrawer}
              >
                <MenuOutlined style={{ color: "#fff", fontSize: 22 }} />
              </div>
            </li>
          </>
        ) : (
          <li>
            <p
              onClick={props.showDrawer}
              className='italiana-regular nav-search-txt  cursor-pointer'
            >
              Search
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};
