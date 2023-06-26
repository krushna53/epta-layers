import React from "react";
import our_unique_image from '../images/our-unique-image1.png';
import our_unique_image2 from '../images/our-unique-image2.png';

function Ouruniquestrenth(){
    return(
        <>
            <div className="our-unique-strenth-section">
                <div className="our-unique-strenth-wrapper">
                    <div className="our-unique-strenth-left-section">
                        <h2>Our Unique Strengths</h2>
                    </div>
                    <div className="our-unique-strenth-right-section">
                        <div className="our-unique-strenth-container">
                            <div className="our-unique-strenth-folder">
                                <div className="our-unique-image">
                                    <img src={our_unique_image}/>
                                </div>
                                <span>EXTENDED ARM OF</span>
                                <h2>OEMs</h2>
                                <p>Epta works with world-leading OEMs. We specialize in implementing their unique 
                                solutions and offering long-term support.
                                </p>
                            </div>
                            <div className="our-unique-strenth-folder">
                                <div className="our-unique-image">
                                    <img src={our_unique_image2}/>
                                </div>
                                <span>DELIVERY MODEL OF</span>
                                <h2>LAER</h2>
                                <p>Epta uses the LAER model (Land-Adopt-Expand-Renew) as a framework for 
                                customer success. It enables us to track KPIs for implementing, training, and 
                                maximizing the value of your investments.    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ouruniquestrenth;