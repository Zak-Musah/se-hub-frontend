import React, { FormEvent, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button, Input } from "antd";
import {
  SyncOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { Context } from "../context";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  const router: NextRouter = useRouter();
  useEffect(() => {
    // getData()
  }, []);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      console.log(data);
      toast.success("Registration successful. Please login.");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      router.push("/login");
    } catch (err: any) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };
  return (
    <div
      style={{ background: "#f0f2f5", marginTop: "-3rem" }}
      className="container col-md-8 col-sm-5 d-flex flex-column align-items-center  pt-3 rounded"
    >
      <h1 className=" text-center mt-3 ">Register</h1>
      <div className=" col-md-10 col-sm-5  ">
        <form onSubmit={handleSubmit}>
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

          <Button
            type="primary"
            className="float-end"
            disabled={!name || !email || !password || loading}
            htmlType="submit"
          >
            {loading ? <SyncOutlined spin /> : "Register"}
          </Button>
        </form>{" "}
        <p className="text-center p-3 text-color">
          Already registered?{" "}
          <Link href="/login">
            <a className="text-color">Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
