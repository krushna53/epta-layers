import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Offerings from "../components/Offerings";
import '../components/style.css';
import Banner from "../components/Banner"
import SolutionOffering from "../components/SolutionOfferings";
import SolutionOfferingsDetails from "../components/SolutionOfferingsDetails";
import Footer from "../components/Footer";
import Ouruniquestrenth from "../components/OurUniquestrenth";
import Contact from "../components/Contact";
import { ToastContainer, toast } from "react-toastify";
import '../css/aos.css'

const IndexPage = () => (
  <Layout>
    <Banner />
    <Offerings />
    <SolutionOffering />
    <SolutionOfferingsDetails />
    <Ouruniquestrenth />
    <Contact />
    <Footer />
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
)

export const Head = () => {
  return (
    <>
      <Seo title="Home" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </>
  );
};

export default IndexPage;
