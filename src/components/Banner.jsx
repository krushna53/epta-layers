import React, { useEffect } from "react"
// import banner_image from "../images/";
import banner_des_image from "../images/logo-image.png"
import banner_mobile_image from "../images/b1.png"
import banner_mobile_image1 from "../images/b2.png"
import Aos from "aos"
import { Link } from "gatsby"

const Banner = () => {
  // useEffect(() => {
  //     Aos.init({ duration: 2000 });
  //   }, []);
  return (
    <>
      <div className="banner-section">
        {/* <div className="banner-image">
          <img src="../images/Epta homepage banner v1.2.png" />
        </div> */}
        <div className="banner-mobile-image">
          <img src={banner_mobile_image} />
        </div>
        <div className="banner-des-folder">
              <div className="banner-des-image">
                <img src={banner_des_image} />
              </div>
              <p>A SINGLE-POINT ENTERPRISE SOLUTIONS PROVIDER</p>
              <h2>
                We work with IT world leaders to deliver
                <br />
                tailor-made solutions.
              </h2>
              <div className="d-flex">
              <div className="banner-btn">
                <Link to="About">About us</Link>
              </div>
              <div className="case-btn">
                <Link to="Casestudies">Case Studies</Link>
              </div>
              </div>
            </div>
      </div>
    </>
  )
}

export default Banner