import {
  SyncOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { Input, Button } from "antd";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";
import { Context } from "../context";
import axios from "axios";
import styles from "../styles/Login.module.scss";
import { NextPage } from "next";
import { userInfo } from "../types";

const Login: NextPage = () => {
  const [email, setEmail] = useState("zak@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  // router
  const router: NextRouter = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post<userInfo>(`/api/login`, {
        email,
        password,
      });

      dispatch({
        type: "LOGIN",
        payload: data,
      });
      // save in local storage
      window.localStorage.setItem("user", JSON.stringify(data));
      // redirect
      router.push("/");
      setLoading(false);
    } catch (err: any) {
      toast(err.response.data);
      setLoading(false);
    }
  };
  return (
    <div
      style={{ background: "#f0f2f5", marginTop: "-3rem" }}
      className="container col-md-8 col-sm-5 d-flex flex-column align-items-center  pt-3 rounded"
    >
      <h1 className="text-center mt-3">Login</h1>
      <div className="col-md-10 col-sm-5">
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            className="form-control mb-2 p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
            suffix={<MailOutlined />}
          />
          <Input.Password
            type="password"
            className="form-control mb-2 p-2 col-md-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Button
            className={styles.btnLoginPage}
            type="primary"
            disabled={!email || !password || loading}
            htmlType="submit"
          >
            {loading ? <SyncOutlined spin /> : "Login"}
          </Button>
        </form>

        <p className="text-center p-3 mt-4">
          Not yet registered?{" "}
          <Link href="/register">
            <a className="text-color">Register</a>
          </Link>
        </p>
        <p className="text-center mt-2">
          <Link href="/forgot-password">
            <a className="text-danger">Forgot password</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
