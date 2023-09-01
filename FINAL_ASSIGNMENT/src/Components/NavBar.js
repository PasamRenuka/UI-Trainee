import React from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import Search from "../asserts/search";
import Notification from "../asserts/notification";
import ProfileIcon from "../asserts/ProfileIcon";
import Dropdown from "../asserts/Dropdown";
import { Button, Divider } from "antd";
import {
  Navbar,
  NavTool,
  LeftHead,
  Heading,
  OrgName,
  MenuFold,
  ReviewHeaderName,
  ReviewHeaderAdmin,
  SearchBtn,
} from "./navBarStyles";
function ReviewHeader() {
  return (
    <Navbar className="reviewNavbar">
      <LeftHead>
        <MenuFold>
          <MenuUnfoldOutlined />
        </MenuFold>
        <Heading>
          <OrgName>Profile</OrgName>
        </Heading>
      </LeftHead>
      <NavTool>
        <SearchBtn id="searchBtn" shape="circle" icon={<Search />} />

        <Button className="helpBtn">Help</Button>

        <div className="notification">
          <Notification />
        </div>
        <Divider
          type="vertical"
          style={{
            width: "1px",
            height: "20px",
            background: "#D1D6DC",
            marginRight: "15px",
          }}
          className="Divi"
        />
        <div className="ProfileIcon">
          <ProfileIcon></ProfileIcon>
        </div>
        <div>
          <div className="userName">
            <ReviewHeaderName className="myName">
              Stephen marshall
            </ReviewHeaderName>
            <div className="DropDown">
              <Dropdown />
            </div>
          </div>
          <ReviewHeaderAdmin className="admin">User</ReviewHeaderAdmin>
        </div>
      </NavTool>
    </Navbar>
  );
}
export default ReviewHeader;
