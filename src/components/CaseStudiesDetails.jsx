import React from "react"
import kv2 from "../images/kv2.jpg"
import Casestudy1pdf from "../pdf/Epta-CaseStudy-1-IT-ITeS.pdf"
import banner2 from "../images/EptaCaseStudy-2-Banner.png"
import Casestudy2pdf from "../pdf/Epta-CaseStudy-2-IT-Transformation.pdf"
import banner3 from "../images/Epta-Case-Study-3.png"
import Casestudy3pdf from "../pdf/Epta-Case-Study-3.pdf"

const CaseStudiesDetails = () => {
  return (
    <>
      <section className="case">
        <div className="container">
          <div className="case_studies">
            <div className="case_right">
              <img src={kv2} alt="Case-Study-image" />
            </div>
            <div className="case_left">
              <h1>
                From Network Chaos to IT Harmony: Epta's Winning Strategy for an
                IT/ITeS Giant
              </h1>
              <p>
                Read how Epta Layers helped deliver remarkable outcomes to a
                leading American IT/ITeS corporation that was grappling with
                network instability and employee productivity issues.
              </p>
              <div className="btn">
                <a href={Casestudy1pdf} target="_blank">
                  Click here more details
                </a>
              </div>
            </div>
          </div>
          <div className="vc-line">
            <span></span>
          </div>
          <div className="case_studies">
            <div className="case_left">
              <h1>
                From Complexity to Clarity: Epta's IT Transformation for
                Engineering Excellence
              </h1>
              <p>
                Discover how Epta Layers revolutionized the IT infrastructure
                architecture of a global engineering company, enhancing project
                efficiency and scalability through tailored solutions in IT
                infrastructure.
              </p>
              <div className="btn">
                <a href={Casestudy2pdf} target="_blank">
                  Click here more details
                </a>
              </div>
            </div>
            <div className="case_right">
              <img src={banner2} alt="Case-Study-image" />
            </div>
          </div>
          <div className="vc-line">
            <span></span>
          </div>
          <div className="case_studies">
            <div className="case_right">
              <img src={banner3} alt="Case-Study-image" />
            </div>
            <div className="case_left">
              <h1>
                From Latency to Efficiency: How Epta Revamped the IT
                Infrastructure for Improved Manufacturing Operations
              </h1>
              <p>
                Read how Epta Layers transformed the IT infrastructure of a
                leading Indian manufacturing company in a phased manner,
                enhancing security, data management, and network services to
                boost business performance.
              </p>
              <div className="btn">
                <a href={Casestudy3pdf} target="_blank">
                  Click here more details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudiesDetails
