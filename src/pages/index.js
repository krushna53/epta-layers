import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../components/style.css';
import Banner from "../components/Banner"
import SolutionOffering from "../components/SolutionOfferings";


const IndexPage = () => (
  <Layout>
    <Banner/>
    <SolutionOffering/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
