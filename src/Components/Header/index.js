import { Link, useLocation } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./index.css";
import { useState } from "react";
import ImageLogo from "./my_logo-removebg-preview.png";

const Header = () => {
  const location = useLocation();

  const [activeRoute, setActiveRoute] = useState(location.pathname);

  return (
    <div className="headerContainer">
      <div className="routeContainer">
        <Link to="/">
          <button
            className={activeRoute === "/" ? "activeBtn" : "notActiveBtn"}
            value="/home"
            onClick={() => {
              setActiveRoute("/");
            }}
          >
            Home
          </button>
        </Link>{" "}
        <Link to="/AboutMe">
          <button
            className={
              activeRoute === "/AboutMe"
                ? "activeBtn abandMyContainer"
                : "notActiveBtn abandMyContainer"
            }
            value="/AboutMe"
            onClick={() => {
              setActiveRoute("/AboutMe");
            }}
          >
            About Me
          </button>
        </Link>
        <Link to="/projects">
          <button
            className={
              activeRoute === "/projects" ? "activeBtn" : "notActiveBtn"
            }
            value="/projects"
            onClick={() => {
              setActiveRoute("/projects");
            }}
          >
            Projects
          </button>
        </Link>
        <Link to="/Snippets">
          <button
            className={
              activeRoute === "/Snippets"
                ? "activeBtn abandMyContainer"
                : "notActiveBtn abandMyContainer"
            }
            value="/Snippets"
            onClick={() => {
              setActiveRoute("/Snippets");
            }}
          >
            My Snippets
          </button>
        </Link>
      </div>

      <div className="loSinContainer">
        <Link to="/">
          <img
            className="imgLogosm"
            src={ImageLogo}
            alt="myLogo"
            value="/"
            onClick={() => {
              setActiveRoute("/");
            }}
          />
        </Link>
      </div>

      <div className="SocialMediaContainer">
        <a
          href="https://github.com/mukeshlakkakula"
          style={{ backgroundColor: "transparent" }}
        >
          <FaGithub className="mediaImg" />
        </a>
        <a
          href="https://www.linkedin.com/in/mukesh-lakkakula/"
          style={{ backgroundColor: "transparent" }}
        >
          <FaLinkedin className="mediaImg" />
        </a>
        <a
          href="https://x.com/lakkakulababblu"
          style={{ backgroundColor: "none", color: "none" }}
        >
          <FaSquareXTwitter className="mediaImg" />
        </a>
      </div>
    </div>
  );
};

export default Header;
