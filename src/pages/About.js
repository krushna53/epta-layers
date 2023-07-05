import React, { useRef } from 'react';
import AboutBanner from '../components/AboutBanner'
import Networking from '../components/Networking'
import BusinessContinuity from '../components/BusinessContinuity'
import OurGuiding from '../components/OurGuiding'
import Santhosh from '../components/Santhosh'
import WeAre from '../components/WeAre'
import Footer from '../components/Footer'
import { ToastContainer } from "react-toastify";
const About = () => {

    return (
        <>
            <AboutBanner />
            <Networking />
            <BusinessContinuity />
            <OurGuiding />
            <Santhosh />
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

export default About
