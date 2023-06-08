import React from 'react'
import Banner from '../components-about-us/Banner'
import BusinessContinuity from '../components-about-us/BusinessContinuity'
import Networking from '../components-about-us/Networking'
import OurGuiding from '../components-about-us/OurGuiding'
import Santhosh from '../components-about-us/Santhosh'
import WeAre from '../components-about-us/WeAre'
import Contact from '../components/Contact'

const About = () => {
    return (
        <>
            <Banner />
            <Networking />
            <BusinessContinuity />
            <OurGuiding />
            <Santhosh />
            <WeAre />
            {/* <Contact /> */}

        </>
    )
}

export default About
