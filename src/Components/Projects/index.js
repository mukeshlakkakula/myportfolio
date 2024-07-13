import React from "react";

import "./index.css";
import Footer from "../Footer";
import ProjectJson from "./projects.json";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  const Projects = ProjectJson.map((each) => (
    <div className="ProjectMapContainer">
      <div className="imageContainer">
        <img src={each.img} alt={each.img} className="imageOne" />
      </div>
      <div className="projectDetailsContainer">
        <h3>{each.name}</h3>
        <p className="descriptionPara">{each.description}</p>
        <div className="gitVisitContainer">
          <a href={each.gitUrl}>
            <FaGithub className="gitImg" />
          </a>
          <a href={each.url} type="button" className="visitBtn">
            Visit <FaArrowUpRightFromSquare />
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="ProjectsFullContainer">
      <div className="MyProjectsHeading">
        <h1>My Projects</h1>
      </div>

      <div className="ProjectsmapsOuterContainer">{Projects}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
