import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Offerings from "../components/Offerings";
import '../components/style.css';
import Banner from "../components/Banner"
import SolutionOffering from "../components/SolutionOfferings";
import Footer from "../components/Footer";


const IndexPage = () => (
  <Layout>
    <Banner />
    <Offerings />
    <SolutionOffering/>
    <Footer/>
  </Layout> 
)

export const Head = () => <Seo title="Home" />

export default IndexPage
