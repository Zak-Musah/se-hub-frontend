import React, { useState } from "react";
import { Input } from "antd";
import {
  SyncOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
} from "@ant-design/icons";
import Link from "next/link";

import { useRouter } from "next/router";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  return (
    <div>
      <h1 className="jumbotron text-center bg-primary square">Register</h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form>
          <Input
            type="text"
            className="form-control mb-2 p-2 "
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
            suffix={<UserOutlined />}
          />
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
            className="btn btn-primary btn-submit"
            disabled={!name || !email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Register"}
          </button>
        </form>{" "}
        <p className="text-center p-3 ">
          Already registered?{" "}
          <Link href="/login">
            <a className="text-color">Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default register;
