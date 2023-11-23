import { Menu } from "antd";
import {
  HomeOutlined,
  DatabaseOutlined,
  MessageOutlined,
  KeyOutlined,
  DingdingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MenuList = ({ darkTheme }) => {
  return (
    <>
      <Menu
        theme={darkTheme ? "dark" : "light"}
        mode="inline"
        className="menubar"
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/dealer/dashboard" className="text-decoration-none">
            Home
          </Link>
        </Menu.Item>
        <Menu.SubMenu
          key="fitment"
          title="Fitment-Report"
          icon={<DatabaseOutlined />}
        >
          <Menu.Item key="report-dealer">
            <Link to="/dealer/fitment-report" className="text-decoration-none">
              Report Dealer
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="PUCC" title="PUCC" icon={<DatabaseOutlined />}>
          <Menu.Item key="pucc">
            <Link
              to="/dealer/create-certificate"
              className="text-decoration-none"
            >
              PUCC
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="Certificate" icon={<MessageOutlined />}>
          <Link to="/dealer/certificate" className="text-decoration-none">
            Certificate
          </Link>
        </Menu.Item>
        <Menu.Item key=" View-stock" icon={<KeyOutlined />}>
          <Link to="/dealer/view-stock" className="text-decoration-none">
            View Stock
          </Link>
        </Menu.Item>

        <Menu.SubMenu
          key="location"
          title="Location & RTO Code"
          icon={<DingdingOutlined />}
        >
          <Menu.Item key="add-rto-code">
            <Link to="/dealer/manage-location" className="text-decoration-none">
              Add Location & RTO Code
            </Link>
          </Menu.Item>
          <Menu.Item key="view-rto-code">
            <Link to="/dealer/delete-location" className="text-decoration-none">
              View & RTO Code
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  );
};

export default MenuList;
