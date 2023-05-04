import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Offerings from "../components/Offerings";
import '../components/style.css';
import Banner from "../components/Banner"
import SolutionOffering from "../components/SolutionOfferings";
import SolutionOfferingsDetails from "../components/SolutionOfferingsDetails";


const IndexPage = () => (
  <Layout>
    <Banner />
    <Offerings />
    <SolutionOffering/>
    <SolutionOfferingsDetails/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
