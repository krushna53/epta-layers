import React from 'react'
import AboutBanner from '../components/AboutBanner'
import Networking from '../components/Networking'
import BusinessContinuity from '../components/BusinessContinuity'
import OurGuiding from '../components/OurGuiding'
import Santhosh from '../components/Santhosh'
import WeAre from '../components/WeAre'
import Footer from '../components/Footer'
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

        </>
    )
}

export default About
