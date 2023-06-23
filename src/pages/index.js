import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
import "../css/aos.css";
import "../components/style.css";


const IndexPage = () => (

  <Layout>
    <Home />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </Layout>
);

export const Head = () => {
  return (
    <>
      <Seo title="Home" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </>
  );
};

export default IndexPage;
