import React from "react";
import footer_image from '../images/logo-image.png';
import { Link } from "gatsby";

function Footer() {
    return (
        <>
            <div className="footer-section">
                <div className="footer_w">
                    <div className="footer-image">
                        <Link to='/'><img src={footer_image} alt="footer_image" /></Link>
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
                                <a href="tel:+91 9886713131">(+91 9886-71-3131)</a>
                            </div>
                            <div className="footer-info">
                                <h2>Email:</h2>
                                <a href="mailto:info@eptalayers.com">info@eptalayers.com</a> 
                            </div>
                        </div>
                    </div>
                    <div className="footer-social-link">
                        <a href="#">  <i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;