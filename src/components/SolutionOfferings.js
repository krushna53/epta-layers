import React from "react";
import SolutionOffering_image from '../images/solution-offering-image.png';

function SolutionOffering(){
    return(
        <>
            <div className="solution-offering-section">
                <div className="solution-offering-wrapper">
                    <div className="solution-offering-left-section">
                        <h2>Solution Offerings</h2>
                        <p>Epta assists in visualizing and communicating how enterprise networks operate, 
                           with a keen focus on network architecture.
                        </p>
                    </div>
                    <div className="solution-offering-right-section">
                        <div className="solution-offring-image">
                            <img src={SolutionOffering_image}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SolutionOffering;