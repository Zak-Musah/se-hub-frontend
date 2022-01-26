import "../styles/globals.css";
import "../styles/Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "antd/dist/antd.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import { Provider } from "../context";
import type { AppProps } from "next/app";
import TopNav from "../components/TopNav";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ToastContainer position="top-right" />
      <Layout>
        <Component className="app " {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
