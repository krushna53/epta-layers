import React from 'react'
import Banner from '../components-about-us/Banner'
import BusinessContinuity from '../components-about-us/BusinessContinuity'
import Networking from '../components-about-us/Networking'
import OurGuiding from '../components-about-us/OurGuiding'
import Santhosh from '../components-about-us/Santhosh'
import WeAre from '../components-about-us/WeAre'
import Footer from '../components/Footer'

const About = () => {
    return (
        <>
            <Banner />
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
