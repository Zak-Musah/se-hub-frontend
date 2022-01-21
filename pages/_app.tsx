import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import { Provider } from "../context";
import type { AppProps } from "next/app";
import TopNav from "../components/TopNav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ToastContainer position="top-right" />
      <TopNav />
      <Component className="app" {...pageProps} />
    </Provider>
  );
}

export default MyApp;
