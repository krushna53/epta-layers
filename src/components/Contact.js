import React from "react";
import contact_image from '../images/contact-image.jpg';
import contact_background1 from '../images/banner-background2.png';
import contact_background2 from '../images/Frame-1.png';

function Contact(){
    return(
        <>
            <div className="contact-epta-layer-section">
                <div className="contact-epta-layer-wrapper">
                    <div className="contact-epta-layer-container">
                        <h2 data-aos="fade-up" data-aos-offset="500">We are Epta Layers</h2>
                        <div className="contact-form">
                         <h2>Our Vision</h2>
                            <p>To provide the best IT infrastructure solutions and help our customers improve their
                               business continuity. We aim to become the most reliable technology partner for all 
                               our esteemed customers
                            </p>
                            <form action="">
                                <h2>Get in touch</h2>
                                <div className="inner-input">
                                    <label className="ipLabels">Name:</label>
                                    <input type="text"/>
                                </div>
                                <div className="inner-input">
                                    <label className="ipLabels">Email:</label>
                                    <input type="Email"/>
                                </div>
                                <div className="inner-input">
                                    <label className="ipLabels">Text:</label>
                                    <textarea type="text" cols="21" rows="5"/>
                                </div>
                                <div className="submit-btn">
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="contact-epta-layer-container-image">
                            <img data-aos="zoom-in" data-aos-offset="500" src={contact_image}/>
                        </div>
                    </div>
                </div>
                <div className="contact-background1">
                    <img src={contact_background1}/>
                </div>
                <div className="contact-background2">
                    <img src={contact_background2}/>
                </div>
            </div>
        </>
    )
}

export default Contact;