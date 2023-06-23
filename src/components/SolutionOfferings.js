import React, { useEffect } from 'react'
import SolutionOffering_image from '../images/solution-offering-image.png';
import SolutionOffering_background1 from '../images/service-background1.png';
import SolutionOffering_background2 from '../images/service-background2.png';

function SolutionOffering() {
    return (
        <>
            <section className="solution-offering-section" id='solutionoffring'>
                <div className="solution-offering-wrapper">
                    <div className="solution-offering-left-section">
                        <h2>Solution Offerings</h2>
                        {/* <p>Epta assists in visualizing and communicating how enterprise networks operate, 
                           with a keen focus on network architecture.
                        </p> */}
                        <p>
                            Epta assists in visualizing and communicating how IT Networks<br /> operate, with a keen focus on network architecture.
                        </p>
                    </div>
                    <div className="solution-offering-right-section">
                        <div className="solution-offring-image">
                            <img src={SolutionOffering_image} />
                        </div>
                    </div>
                </div>
                <div className="solution-background-image1">
                    <img src={SolutionOffering_background1} />
                </div>
                <div className="solution-background-image2">
                    <img src={SolutionOffering_background2} />
                </div>
            </section>
        </>
    )
}

export default SolutionOffering;