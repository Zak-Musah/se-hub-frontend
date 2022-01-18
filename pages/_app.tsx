import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import TopNav from "../components/TopNav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ToastContainer position="top-center" /> */}
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
