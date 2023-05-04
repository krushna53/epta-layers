import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Offerings from "../components/Offerings";
import '../components/style.css';
import Banner from "../components/Banner"
import SolutionOffering from "../components/SolutionOfferings";


const IndexPage = () => (
  <Layout>
    <SolutionOffering/>
    <Banner />
    <Offerings />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
