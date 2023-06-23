import React, { useRef } from 'react';
import Banner from "../components/Banner";
import Offerings from '../components/Offerings';
import SolutionOffering from "../components/SolutionOfferings";
import SolutionOfferingsDetails from "../components/SolutionOfferingsDetails";
import Footer from "../components/Footer";
import Ouruniquestrenth from "../components/OurUniquestrenth";
import Contact from "../components/Contact";
import useScrollSnap from 'react-use-scroll-snap';
import CollaborationArchitecture from '../components/CollaborationArchitecture';
import DataCenterServices from '../components/DataCenterServices';


const Home = () => {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef });

    return (
        <div ref={scrollRef}>
            <Banner />
            <Offerings />
            <SolutionOffering />
            <SolutionOfferingsDetails />
            <CollaborationArchitecture />
            <DataCenterServices />
            <Ouruniquestrenth />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
