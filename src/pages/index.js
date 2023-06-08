import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Home from "./Home";
import About from "./About";
import { ToastContainer } from "react-toastify";
import "../css/aos.css";
import "../components/style.css";

const IndexPage = () => (
  <Layout>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
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
