import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <hr />

      <div className="footerBottomSection">
        <p>2024 © All Rights Reserved.</p>
        <h6>Thank you For Wisiting my Portfolio</h6>
        <a
          type="button"
          className="ContactBtn"
          href="mailto:lakkakulababblu@gmail.com"
        >
          My Contact
        </a>
      </div>
    </div>
  );
};

export default Footer;
