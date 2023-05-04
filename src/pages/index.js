import * as React from "react"
import Banner from "../components/Banner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Offerings from "../components/Offerings";
import '../components/style.css';


const IndexPage = () => (
  <Layout>
    <Banner />
    <Offerings />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
