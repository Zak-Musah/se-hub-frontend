import {
  SyncOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("zak@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  return (
    <div>
      <h1 className="jumbotron text-center bg-primary square">Login</h1>

      <div className="container col-md-3 offset-md-4 pb-5">
        <form>
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
