import React from "react"
import AboutBanner from "../components/AboutBanner"
import CaseStudiesDetails from "../components/CaseStudiesDetails"
import WeAre from "../components/WeAre"
import Footer from "../components/Footer"
import { ToastContainer } from "react-toastify"
const Casestudies = () => {
  return (
    <>
      <AboutBanner />
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a className="active" href="/">
              Home
            </a>
          </li>
          <i className="fa-solid fa-angle-right"></i>
          <li className="breadcrumb-item" aria-current="page">
          Case Studies
          </li>
        </ul>
      </nav>
      <CaseStudiesDetails/>
      <WeAre />
      <Footer />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
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
    </>
  )
}

export default Casestudies
