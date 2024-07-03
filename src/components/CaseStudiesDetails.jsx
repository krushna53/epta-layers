import React from "react"
import kv2 from "../images/kv2.jpg"
import Casestudy1pdf from "../pdf/Epta-CaseStudy-1-IT-ITeS.pdf"

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
          {/* <div className="vc-line">
            <span></span>
          </div>
          <div className="case_studies">
            <div className="case_left">
              <h1></h1>
              <p>
                 
              </p>
              <div className="btn">
                <a href="">Click here more details</a>
              </div>
            </div>
            <div className="case_right">
              <img src={kv2} alt="case" />
            </div>
          </div>
          <div className="vc-line">
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
