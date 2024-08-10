import { Layout, Flex } from "antd";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/Header";
import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./App.css";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

const { Sider, Header, Content } = Layout;
export const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout>
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="sider"
        >
          <Sidebar />
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="triger-btn"
          />
        </Sider>
        <Layout className="bg-primary-light ">
          <Header className="pt-12px bg-purple-50" id="header">
            <CustomHeader />
          </Header>
          <Content className="bg-primary-light p-20px m-24px " id="content">
            <Flex gap="large">
              <MainContent />
              <SideContent />
            </Flex>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default App;
