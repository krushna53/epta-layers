import React from "react"
import kv2 from "../images/kv2.jpg"
import Casestudy1pdf from "../pdf/Epta-CaseStudy-1-IT-ITeS.pdf"
import banner2 from "../images/EptaCaseStudy-2-Banner.png"
import Casestudy2pdf from "../pdf/Epta-CaseStudy-2-IT-Transformation.pdf"

const CaseStudiesDetails = () => {
  return (
    <>
      <section className="case">
        <div className="container">
          <div className="case_studies">
            <div className="case_right">
              <img src={kv2} alt="case" />
            </div>
            <div className="case_left">
              <h1>From Network Chaos to IT Harmony: Epta's Winning Strategy for an IT/ITeS Giant</h1>
              <p>
              Read how Epta Layers helped deliver remarkable outcomes to a leading American IT/ITeS corporation that was grappling with network instability and employee productivity issues.
              </p>
              <div className="btn">
                <a href={Casestudy1pdf} target="_blank">Click here more details</a>
              </div>
            </div>
          </div>
          <div className="vc-line">
            <span></span>
          </div>
          <div className="case_studies">
            <div className="case_left">
              <h1>From Complexity to Clarity: Epta's IT Transformation for Engineering Excellence</h1>
              <p>
              Discover how Epta Layers revolutionized the IT infrastructure architecture of a global engineering company, enhancing project efficiency and scalability through tailored solutions in IT infrastructure. 
              </p>
              <div className="btn">
                <a href={Casestudy2pdf} target="_blank">Click here more details</a>
              </div>
            </div>
            <div className="case_right">
              <img src={banner2} alt="case" />
            </div>
          </div>
          {/* <div className="vc-line">
            <span></span>
          </div>
          <div className="case_studies">
            <div className="case_right">
              <img src={kv2} alt="case" />
            </div>
            <div className="case_left">
              <h1></h1>
              <p>
               
              </p>
              <div className="btn">
                <a href="">Click here more details</a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default CaseStudiesDetails
