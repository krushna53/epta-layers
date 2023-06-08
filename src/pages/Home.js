import React from 'react'
import Banner from "../components/Banner"
import Offerings from '../components/Offerings'
import SolutionOffering from "../components/SolutionOfferings";
import SolutionOfferingsDetails from "../components/SolutionOfferingsDetails";
import Footer from "../components/Footer";
import Ouruniquestrenth from "../components/OurUniquestrenth";
import Contact from "../components/Contact";
const Home = () => {
    return (
        <>
            <Banner />
            <Offerings />
            <SolutionOffering />
            <SolutionOfferingsDetails />
            <Ouruniquestrenth />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
