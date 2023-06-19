import { Link } from "gatsby"
import React from "react"

const AboutBanner = () => {
  return (
    <>
      <section className="about_banner">
        <div className="about_banner_title">
          <h2>We are Epta Layers</h2>
       <Link to="/"> <img src="../images/apple.png" alt="apple" /></Link>  
        </div>
      </section>
    </>
  )
}

export default AboutBanner
