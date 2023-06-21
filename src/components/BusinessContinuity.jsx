import React, { useEffect } from 'react'
import Aos from 'aos';
const BusinessContinuity = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
}, []);
  return (
    <>
    <section className='business_continuity'>
      <div className='business'>
        <div className='d-flex'>
          <div className='left_con'data-aos="fade-up" data-aos-offset="200">
            <h2>Business Continuity is at Our Core</h2>
            <p>Along with network and infrastructure solutions, Epta assists in hardware supply, implementation, and post-implementation support. We ensure your business operations never see the stop sign.</p>
          </div>
          <div className='right_img'>
          {/* <img src="../images/13.png" alt="12" /> */}
           </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default BusinessContinuity
