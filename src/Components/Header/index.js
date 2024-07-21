import { Link, useLocation } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./index.css";
import { useState } from "react";
import ImageLogo from "./my_logo-removebg-preview.png";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  console.log(activeRoute);
  return (
    <div className="headerContainer">
      <div className="routeContainer">
        <Link to="myportfolio/">
          <button
            className={
              activeRoute === "myportfolio/" ? "activeBtn" : "notActiveBtn"
            }
            value="myportfolio/home"
            onClick={() => {
              setActiveRoute("myportfolio/");
            }}
          >
            Home
          </button>
        </Link>{" "}
        <Link to="myportfolio/AboutMe">
          <button
            className={
              activeRoute === "myportfolio/AboutMe"
                ? "activeBtn abandMyContainer"
                : "notActiveBtn abandMyContainer"
            }
            value="myportfolio/AboutMe"
            onClick={() => {
              setActiveRoute("myportfolio/AboutMe");
            }}
          >
            About Me
          </button>
        </Link>
        <Link to="myportfolio/projects">
          <button
            className={
              activeRoute === "myportfolio/projects"
                ? "activeBtn"
                : "notActiveBtn"
            }
            value="myportfolio/projects"
            onClick={() => {
              setActiveRoute("myportfolio/projects");
            }}
          >
            Projects
          </button>
        </Link>
        <Link to="myportfolio/Snippets">
          <button
            className={
              activeRoute === "myportfolio/Snippets"
                ? "activeBtn abandMyContainer"
                : "notActiveBtn abandMyContainer"
            }
            value="myportfolio/Snippets"
            onClick={() => {
              setActiveRoute("myportfolio/Snippets");
            }}
          >
            My Snippets
          </button>
        </Link>
      </div>

      <div className="loSinContainer">
        <Link to="myportfolio/">
          <img
            className="imgLogosm"
            src={ImageLogo}
            alt="myLogo"
            value="myportfolio/"
            onClick={() => {
              setActiveRoute("myportfolio/");
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
