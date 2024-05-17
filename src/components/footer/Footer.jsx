import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <p className="footer-heart">
        Made with 💔 by{" "}
        <Link target="_blank" to="https://shashankcoc.netlify.app/">
          shashankcoc
        </Link>
      </p>
    </div>
  );
};

export default Footer;
