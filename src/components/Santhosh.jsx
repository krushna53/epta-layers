import React, { useEffect } from 'react'
import Aos from 'aos';

const Santhosh = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
}, []);
  return (
    <>
      <section className="santos">
        <div className="wrapper">
          <div className="santos_left_img" data-aos="zoom-in" data-aos-duration="3000">
            <img src="../images/Santhosh photo v2 (1).png" alt="santhosh" />
          </div>
          <div className="santos_right_con" data-aos="fade-up" data-aos-offset="200">
            <h2>Santhosh Baragur</h2>
            <p>
              After spending more than 20 years in Sales and Business
              Development for the Enterprise IT segment, I launched Epta Layers
              Pvt. Ltd. where I drive business continuity and IT transformation.
            </p>
            <p>
              My keen sense of identifying prospective customers is my driving
              force for achieving business excellence without losing sight of
              the top and bottom-line profitability.
            </p>
            <button>
              <a href="/">Connect on LinkedIn</a>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Santhosh
