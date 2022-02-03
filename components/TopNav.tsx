import { Button } from "antd";
import Link from "next/link";
import {
  MenuOutlined,
  SearchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { navItems } from "./nav/helpers.";
import styles from "../styles/TopNav.module.scss";
import { userInfo } from "../types";

const TopNav = () => {
  const [current, setCurrent] = useState("");
  const { state, dispatch } = useContext(Context);

  const { user } = state;
  console.log(user);

  const router = useRouter();
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const navigateToPage = (route: string) => {
    router.push(`/${route}`);
  };
  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };
  return (
    <nav style={{ zIndex: 1020 }} className="container-fluid">
      <div className="fw-bold">
        <Link href="/">
          <h3 id="logo">HUB</h3>
        </Link>
      </div>

      <div className="row  d-flex justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="search">
            <input
              type="text"
              className="form-control"
              placeholder="Search Business"
            ></input>
            <SearchOutlined className="fa fa-search" />
          </div>
        </div>
      </div>

      <label htmlFor="drop" className="toggle">
        <MenuOutlined />
      </label>
      <input type="checkbox" id="drop"></input>

      <ul className="menu">
        {navItems.map((item, idx) => (
          <li key={item.name}>
            <Link href={`${item.path}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}

        {user === null && (
          <>
            <Button
              key="/login"
              className={styles.btnLoginTopNav}
              type="primary"
              href="/login"
            >
              Sign in
            </Button>
          </>
        )}

        {user !== null && (
          <>
            <Button key="/user" className={styles.btnUserTopNav} type="primary">
              {(user && user.name) || "Zak"}
            </Button>
            <Button
              onClick={logout}
              key="/logout"
              className={styles.btnLogoutTopNav}
              type="primary"
            >
              <LogoutOutlined />
              Logout
            </Button>
          </>
        )}
      </ul>
    </nav>
  );
};
export default TopNav;
