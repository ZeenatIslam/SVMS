import React from "react";
import { Flex } from "antd";
import Banner from "./Banner";
import {
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Orders from "./orders/Orders";
import Todo from "./todo/Todo";
import Geofencing from "./Geofencing";

import Fuel_Consumption from "./Fuel_Consumption";
import Vehicle_Info from "./Vehicle_Info";

function MainContent() {
  return (
    <div style={{ flex: 1 }} >
      <Flex vertical gap="2.3rem">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/Fuel_Consumption" element={<Fuel_Consumption />} />
          <Route path="/Vehicle_Info" element={<Vehicle_Info/>}/>
         <Route path="/Geofencing" element={<Geofencing/>}/>
        </Routes>
      </Flex>
    </div>
  );
}

export default MainContent;
