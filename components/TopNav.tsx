import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Item, SubMenu, ItemGroup } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("");
  return (
    <Menu mode="horizontal" selectedKeys={[current]}>
      <Item
        onClick={(e) => setCurrent(e.key)}
        key="/"
        icon={<AppstoreOutlined />}
      >
        <Link href="/">
          <a>SE-HUB </a>
        </Link>
      </Item>
      <>
        <Item
          onClick={(e) => setCurrent(e.key)}
          key="/login"
          icon={<LoginOutlined />}
        >
          <Link href="/login">
            <a> Login </a>
          </Link>
        </Item>
        <Item
          onClick={(e) => setCurrent(e.key)}
          key="/register"
          icon={<UserAddOutlined />}
        >
          <Link href="/register">
            <a> Register </a>
          </Link>
        </Item>
      </>
      <>
        <SubMenu icon={<CoffeeOutlined />} title={"Zak"} className="ms-auto">
          <ItemGroup>
            <Item key="/user">
              <Link href="/user">
                <a>Dashboard</a>
              </Link>
            </Item>
            {/* <Item onClick={logout}>Logout</Item> */}
            <Item icon={<LogoutOutlined />}>Logout</Item>
          </ItemGroup>
        </SubMenu>
      </>
      ,
    </Menu>
  );
};
export default TopNav;
