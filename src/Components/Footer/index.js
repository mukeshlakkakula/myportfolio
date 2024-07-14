import React from "react";
import "./index.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
      <div className="SocialMediaContainerFooter">
        <a
          href="https://github.com/mukeshlakkakula"
          style={{ backgroundColor: "transparent" }}
        >
          <FaGithub className="mediaImg02" />
        </a>
        <a
          href="https://www.linkedin.com/in/mukesh-lakkakula/"
          style={{ backgroundColor: "transparent" }}
        >
          <FaLinkedin className="mediaImg02" />
        </a>
        <a
          href="https://x.com/lakkakulababblu"
          style={{ backgroundColor: "none", color: "none" }}
        >
          <FaSquareXTwitter className="mediaImg02" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
