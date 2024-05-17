import React from "react";
import Navbar from "../Navbar/Navbar";
import "./contact.css";
import Footer from "../footer/Footer";
const contact = () => {
  return (
    <div>
      <Navbar />
      <div class="contact container-contact">
        <form action={process.env.REACT_APP_CONTACT_KEY} method="POST">
          <div class="form">
            <div class="form-txt">
              <h3 style={{ fontSize: 13, fontWeight: 400 }}>
                I know what you need, LET'S TALK
              </h3>
              <p>GET IN TOUCH</p>
            </div>
            <div class="form-details">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                id="message"
                cols="52"
                rows="7"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit"> SEND MESSAGE</button>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default contact;
