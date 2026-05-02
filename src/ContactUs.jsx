import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_f4umhl9",     // replace
        "template_wx8rj1u",    // replace
        form.current,
        "9WS-h_7rYOMPClnE1"
    ).then(
      () => {
      toast.success("Message received successfully!", {
  position: "top-right",
  autoClose: 4000,
  transition: Bounce,
  className: "custom-toast",
  bodyClassName: "custom-toast-body"
});
        form.current.reset();
      },
      () => {
        toast.error("Something went wrong!");
      }
    );
  };

  return (
    <div className="contact-container">
      <ToastContainer />

      {/* 🔥 COMPANY DETAILS */}
      <div className="contact-header">
        <h1>Visit Our Showroom</h1>

        <div className="details">
          <p>📍 Plot no 462, Prasanth Nagar, Miyapur, Telangana 500049 | 📞 +91 94407 19958 | 📧 srivedhastones@gmail.com</p>
        </div>
      </div>

      <div className="contact-wrapper">
        
        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2>Get In Touch</h2>

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="number" placeholder="Phone Number" />
          <textarea name="message" placeholder="Your Message" required />

          <button type="submit">Send Message</button>
        </form>

        {/* MAP */}
      <div className="map-container">
  <iframe
    title="Sri Vedha Stones Location"
    src="https://www.google.com/maps?cid=17206169742927125551&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
  ></iframe>

  {/* 🔥 Get Directions */}
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=Sri+Vedha+Stones+Miyapur+Hyderabad"
    target="_blank"
    rel="noreferrer"
    className="direction-btn"
  >
    Get Directions
  </a>
</div>

      </div>
    </div>
  );
};

export default ContactUs;