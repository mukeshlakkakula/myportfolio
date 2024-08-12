import React from "react";
import ThreeD from "../ThreeD";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./index.css";
import Footer from "../Footer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#000000f0" }}>
      <div className="HomeContainer">
        <div>{<ThreeD />}</div>
        <div className="IntroSection ">
          <h1 className="text-white Head1">
            Turning Vision Into Reality With Code And Design.
          </h1>
          <p className="text-white para1">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and My
            Snippets, showcasing my expertise in React.js and web development.
          </p>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <a
              type="button"
              className="ResumeBtn"
              download={true}
              href={`${process.env.PUBLIC_URL}/Mukesh_Resume0806.pdf`}
            >
              Resume {"  "}
              <FaArrowUpRightFromSquare />
            </a>
            <a
              type="button"
              className="ContactBtn"
              href="mailto:lakkakulababblu@gmail.com"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
