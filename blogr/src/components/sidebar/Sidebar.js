import React from "react";
import { Container, Content } from "./Sidebarstyle";
import "../Navbar.css";
import { Button } from "../Button";

import { FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import SidebarItem from "./SidebarItem";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <div className="container">
      <Container sidebar={active}>
        <FaTimes onClick={closeSidebar} />
        <Content>
          <SidebarItem Text="Product" Icon={MdKeyboardArrowDown} />
          <SidebarItem Text="Company" Icon={MdKeyboardArrowDown} />
          <SidebarItem Text="Connect" Icon={MdKeyboardArrowDown} />
          <hr />
          <div className="btns-sidebar">
            <input className="btn1" type="button" value="Login" />
            <input className="btn2" type="button" value="Sign Up" />
          </div>
        </Content>
      </Container>
    </div>
  );
};

export default Sidebar;
