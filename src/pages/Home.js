import React, { useEffect, useRef } from 'react';
import Banner from "../components/Banner";
import Offerings from '../components/Offerings';
import SolutionOffering from "../components/SolutionOfferings";
import SolutionOfferingsDetails from "../components/SolutionOfferingsDetails";
import Footer from "../components/Footer";
import Ouruniquestrenth from "../components/OurUniquestrenth";
import Contact from "../components/Contact";
import CollaborationArchitecture from '../components/CollaborationArchitecture';
import DataCenterServices from '../components/DataCenterServices';


const Home = () => {
    return (
        <>
            <Banner />
            <Offerings />
            <SolutionOffering />
            <SolutionOfferingsDetails />
            <CollaborationArchitecture />
            <DataCenterServices />
            <Ouruniquestrenth />
            <Contact />
            <Footer />
        </>

    );
};

export default Home;
