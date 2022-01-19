import {
  SyncOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { Input } from "antd";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useContext, useState } from "react";
import { Context } from "../context";
import axios from "axios";

const Login = () => {
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
    console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      // console.log("LOGIN RESPONSE", data);
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
    <div>
      <h1 className="jumbotron text-center bg-primary square">Login</h1>

      <div className="container col-md-3 offset-md-4 pb-5">
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

          <button
            type="submit"
            className="btn btn-primary btn-submit "
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Login"}
          </button>
        </form>

        <p className="text-center p-3 ">
          Not yet registered?{" "}
          <Link href="/register">
            <a className="text-color">Register</a>
          </Link>
        </p>
        <p className="text-center">
          <Link href="/forgot-password">
            <a className="text-danger">Forgot password</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
