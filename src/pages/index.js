import * as React from "react"
import Banner from "../components/Banner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../components/style.css';


const IndexPage = () => (
  <Layout>
    <Banner/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
