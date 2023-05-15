import React from "react";
import footer_image from '../images/logo-image.png';

function Footer(){
    return(
        <>
            <div className="footer-section">
                <div className="footer-wrapper">
                    <div className="footer-image">
                        <img src={footer_image}/>
                    </div>
                    <div className="footer-container">
                        <h2 className="contactUs-title">Contact us</h2>
                        <div className="footer-folder1">
                            <h2>Main Office</h2>
                            <p>#47, 9th Cross, 5th Main, 
                               Srinidhi Layout
                               Bengaluru – 560062
                            </p>
                        </div>
                        <div className="footer-folder2">
                            <div className="footer-info">
                                <h2>Tel:</h2>
                                <a href="#">(+91 9886-71-3131)</a>
                            </div>
                            <div className="footer-info">
                                <h2>Email:</h2>
                                <a href="#">info@eptalayers.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-social-link">
                        <i class="fa-brands fa-linkedin"></i>
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;