import { useCallback, useEffect, useState } from "react";
import { Button, Layout, theme } from "antd";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import Themebtn from "./components/Themebtn";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const { Header, Sider } = Layout;
const AppLayout = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(true);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSidebar = useCallback(() => {
    setCollapsed((prevCollapsed) => {
      const newCollapsed = !prevCollapsed;
      localStorage.setItem("collapsed", JSON.stringify(newCollapsed));
      return newCollapsed;
    });
  }, []);

  useEffect(() => {
    const collapsedState = localStorage.getItem("collapsed");
    if (collapsedState) {
      setCollapsed(JSON.parse(collapsedState));
    }
  }, []);
  return (
    <>
      <Layout>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? "dark" : "light"}
          className="sidebar"
          width={270}
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <Themebtn darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header
            className="d-flex flex-row justify-content-between align-items-center bg-dark-blue text-white"
            style={{ padding0: 0, background: colorBgContainer }}
          >
            <Button
              className="toggle text-white"
              onClick={handleSidebar}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            ></Button>
            <div className="mx-3">
              <div className="icon">English</div>
            </div>
          </Header>
          <Content id="content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AppLayout;
