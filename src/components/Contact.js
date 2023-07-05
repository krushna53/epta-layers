import React, { useRef, useState } from "react";
import contact_image from "../images/contact-image.jpg"
import contact_background1 from "../images/banner-background2.png"
import contact_background2 from "../images/Untitled_design-c8d807f30d0010b22f5cd3ee7c6fa99a (1).png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(     
        'service_2y8jmmd',
        'template_aqyj34d',
        form.current,
        'iSJQH-k6iBRGiGbK1'
        // process.env.REACT_APP_SERVICE_ID,
        // process.env.REACT_APP_TEMPLATE_ID,
        // form.current,
        // process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          // Show a toast with the thank you message
          toast.success("Thank you for your message!");
        },
        (error) => {
          console.log(error.text);
          // Show a toast with the error message
          toast.error("Oops! Something went wrong.");
        }
      );
  };
  return (
    <>
      <div className="bg_contact">
        <div id="Getintouch" className="contact-epta-layer-section">
          <div className="contact-epta-layer-wrapper">
            <div className="contact-epta-layer-container">
              <h2>
                We are Epta Layers
              </h2>
              <div
                className="contact-form">
                <h2>Our Vision</h2>
                <p>
                  To provide the best IT infrastructure solutions and help our
                  customers improve their business continuity. We aim to become
                  the most reliable technology partner for all our esteemed
                  customers.
                </p>
                <form ref={form} onSubmit={sendEmail}>
                  <h2>Get in touch</h2>
                  <div className="inner-input">
                    <label className="ipLabels">Name</label>
                    <input type="text"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className="inner-input">
                    <label className="ipLabels">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="inner-input">
                    <label className="ipLabels">Text</label>
                    <textarea
                      type="text"
                      cols="21"
                      rows="5"
                      className="form-control"
                      name="message"
                      required
                    />
                  </div>
                  <div className="submit-btn">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
              <div className="contact-epta-layer-container-image">
                <img
                  src={contact_image}
                />
              </div>
            </div>
          </div>
          <div className="contact-background1">
            <img src={contact_background1} />
          </div>
          <div className="contact-background2">
            <img src={contact_background2} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact
