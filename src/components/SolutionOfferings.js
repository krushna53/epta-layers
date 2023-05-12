import React, { useEffect } from 'react'
import SolutionOffering_image from '../images/solution-offering-image.png';
import SolutionOffering_background1 from '../images/service-background1.png';
import SolutionOffering_background2 from '../images/service-background2.png';
import Aos from 'aos';
function SolutionOffering(){
    useEffect(() => {
        Aos.init({ duration: 3000 });
      }, []);
    return(
        <>
            <div className="solution-offering-section">
                <div className="solution-offering-wrapper">
                    <div className="solution-offering-left-section" data-aos="fade-up" data-aos-offset="500" data-aos-duration="2000">
                        <h2>Solution Offerings</h2>
                        <p>Epta assists in visualizing and communicating how enterprise networks operate, 
                           with a keen focus on network architecture.
                        </p>
                    </div>
                    <div className="solution-offering-right-section" data-aos="fade-up" data-aos-offset="500" data-aos-duration="3000">
                        <div className="solution-offring-image">
                            <img src={SolutionOffering_image}/>
                        </div>
                    </div>
                </div>
                <div className="solution-background-image1" data-aos="fade-up" data-aos-duration="4000">
                    <img src={SolutionOffering_background1}/>
                </div>
                <div className="solution-background-image2" data-aos="fade-up" data-aos-duration="3000">
                    <img src={SolutionOffering_background2}/>
                </div>
            </div>
        </>
    )
}

export default SolutionOffering;