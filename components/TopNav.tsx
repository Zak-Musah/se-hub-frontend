import { Menu, Tabs, Typography } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const { Item, SubMenu, ItemGroup } = Menu;
const { TabPane } = Tabs;
const { Title } = Typography;
const TopNav = () => {
  const [current, setCurrent] = useState("");
  const { state, dispatch } = useContext(Context);

  const { user } = state;

  const router = useRouter();
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };
  return (
    <Menu mode="horizontal" selectedKeys={[current]}>
      <Item onClick={(e) => setCurrent(e.key)} key="/">
        <Link href="/">
          <Title level={3}>SE HUB</Title>
        </Link>
      </Item>
      {user === null && (
        <>
          <Item
            onClick={(e) => setCurrent(e.key)}
            key="/login"
            icon={<LoginOutlined />}
            className="ms-auto"
          >
            <Link href="/login">
              <a> Login </a>
            </Link>
          </Item>
        </>
      )}

      <Item onClick={(e) => setCurrent(e.key)} key="/forums">
        <Link href="/forums">
          <a> Forums </a>
        </Link>
      </Item>
      <Item onClick={(e) => setCurrent(e.key)} key="/coaching">
        <Link href="/coaching">
          <a> Coaching </a>
        </Link>
      </Item>
      <Item onClick={(e) => setCurrent(e.key)} key="/local-content">
        <Link href="/local-content">
          <a>Local Content </a>
        </Link>
      </Item>
      <Item onClick={(e) => setCurrent(e.key)} key="/contact-page">
        <Link href="/contact">
          <a> Contact Us </a>
        </Link>
      </Item>

      {user !== null && (
        <>
          <SubMenu icon={<CoffeeOutlined />} title={"Zak"} className="ms-auto">
            <ItemGroup>
              <Item key="/dashboard">
                <Link href="/">
                  <a>Dashboard</a>
                </Link>
              </Item>
              <Item key="/setting">
                <Link href="/">
                  <a>Setting</a>
                </Link>
              </Item>

              <Item onClick={logout} icon={<LogoutOutlined />}>
                Logout
              </Item>
            </ItemGroup>
          </SubMenu>
        </>
      )}
    </Menu>
  );
};
export default TopNav;
