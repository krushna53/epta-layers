import React, { useRef, useState } from "react"
import contact_image from "../images/contact-image.jpg"
import contact_background1 from "../images/banner-background2.png"
import contact_background2 from "../images/Untitled_design.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser"

const WeAre = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(false)

  const notify = () => {
    toast.success("Your Request has been sent😊", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  function handleEmailChange(event) {
    const inputEmail = event.target.value
    setEmail(inputEmail)

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    setIsValidEmail(emailRegex.test(inputEmail))
  }

  function NameinputChange(e) {
    const inputText = e.target.value
    setName(inputText)
  }

  function MessageInputChange(e) {
    const inputText = e.target.value
    setMessage(inputText)
  }
  const form = useRef()
  const sendEmail = e => {
    e.preventDefault()
    if (isValidEmail) {
      emailjs
        .sendForm(
          "service_9spedfi",
          "template_juxtdiw",
          form.current,
          "JEUgk1jZnrZLqJz5k",
        )
        .then(
          result => {
            notify()
            console.log(result.text)
            setName("")
            setEmail("")
            setMessage("")
          },
          error => {
            console.log(error.text)
          }
        )
    } else {
      //   toast.error("Please enter a correct email value");
      console.log("Email is invalide")
    }
  }

  return (
    <>
    <section className="WeAre">
      <div className="contact-epta-layer-section">
        <div className="contact-epta-layer-wrapper">
          <div className="contact-epta-layer-container">
            <h2>
              We are Epta Layers
            </h2>
            <div className="contact-form">
             
              <form ref={form} action="" onSubmit={sendEmail}>
                <h2>Get in touch</h2>
                <div className="inner-input">
                  <label className="ipLabels">Name:</label>
                  <input type="text" name="name" value={name} onChange={NameinputChange} required />
                </div>
                <div className="inner-input">
                  <label className="ipLabels">Email:</label>
                  <input
                    type="Email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="inner-input">
                  <label className="ipLabels">Text:</label>
                  <textarea
                    type="text"
                    cols="21"
                    rows="5"
                    value={message}
                    name="message"
                    onChange={MessageInputChange}
                    required
                  />
                </div>
                <div className="submit-btn">
                  <button>Submit</button>
                </div>
              </form>
              <div className="form_con">
              <h2>Careers</h2>
              <p>
              To apply for a position at Epta Layers,
              please send a cover letter together with
              your resume to <b>hr@eptalayers.com</b>
              </p>
              

              </div>
            </div>
            <div className="contact-epta-layer-container-image">
              <img
                data
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
    </section>
      
    </>
  )
}

export default WeAre