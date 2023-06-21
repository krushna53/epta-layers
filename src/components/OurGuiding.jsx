import React, { useEffect } from 'react'
import Aos from 'aos';

const OurGuiding = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
}, []);
  return (
    <>
      <section className="OurGuiding">
        <div className="wrapper">
        <div className="OurGuiding_wrapper">
        <h2 data-aos="fade-up" data-aos-offset="200">Our Guiding Principles</h2>
          <div className="d-flex">
            <div className="left_box">
              <img src="../images/14.png" alt="" />
              <div className="con" data-aos="fade-up" data-aos-offset="200">
                <h5>Vision</h5>
                <p>
                  To provide the best IT infrastructure solutions and help our
                  customers improve their business continuity. We aim to become
                  the most reliable technology partner to enterprise customers.
                </p>
              </div>
            </div>
            <div className="right_box">
            <img src="../images/14.png" alt="" />
              <div className="con" data-aos="fade-up" data-aos-offset="200">
                <h5>Mission</h5>
                <p>
                  To be the point solutions team for all IT infrastructure
                  needs. From implementation to business continuity, we are
                  dedicated to delivering the best possible customer experience
                  and strive to continually improve our solution offerings.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default OurGuiding
