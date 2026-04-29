import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f4umhl9",     // replace
        "template_wx8rj1u",    // replace
        form.current,
        "9WS-h_7rYOMPClnE1"      // replace
      )
      .then(
        () => {
          toast.success(
            "Message received successfully, we will reach you soon!",
            {
              position: "top-right",
              autoClose: 5000,
              transition: Bounce,
            }
          );
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong!");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <ToastContainer />

      <div className="contact-wrapper">
        
        {/* LEFT SIDE FORM */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2>Contact Us</h2>

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="number" name="number" placeholder="Phone Number" />
          <textarea name="message" placeholder="Your Message" required />

          <button type="submit">Send Message</button>
        </form>

        {/* RIGHT SIDE MAP */}
        <div className="map-container">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=17.385044,78.486671&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>

    
    </div>
  );
};