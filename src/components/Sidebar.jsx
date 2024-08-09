import { Flex, Menu } from "antd";
import React from "react";
import { FaLeaf } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { BsFillTruckFrontFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { PiMonitor } from "react-icons/pi";
import {
  LoginOutlined,
  ProfileOutlined,
  CarryOutOutlined,
  SettingOutlined,
  OrderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Sidebar() {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaLeaf />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
      >
        <Menu.Item key="1" icon={<PiMonitor />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>    
        <Menu.Item key="1" icon={<FaMapMarkedAlt />}>
          <Link to="/Location_Tracking">Location Tracking</Link>
        </Menu.Item>    
        <Menu.Item key="3" icon={<BsFillFuelPumpFill />}>
          <Link to="/Fuel_Consumption">Fuel Consumption</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<FaClock />}>
          <Link to="/Time_Management">Time Management</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<FiVideo />}>
          <Link to="/Driver_Monitoring">Driver Monitoring </Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<ProfileOutlined />}>
          <Link to="/Driver_Info">Driver Information</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<BsFillTruckFrontFill />}>
          <Link to="/Vehicle_Info">Vehicle Information</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<SiGooglemaps />}>
          <Link to="/Geofencing">Geofencing</Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<FiUsers />}>
          <Link to="/Customer_Info">Customer Information</Link>
        </Menu.Item>
        <Menu.Item key="10" icon={<LoginOutlined />}>
          <Link to="/logout">Logout</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Sidebar;
