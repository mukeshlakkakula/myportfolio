import React from "react";
import Footer from "../Footer";
import { FaGitAlt } from "react-icons/fa";
import snipData from "./snip.json";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./index.css";

const Snippets = () => {
  const CompanyAssignments = snipData[0].map((each) => (
    <div className="CompanyAssignmentContainer">
      <h4 className="companyNameContainer">
        {each.cmpName}{" "}
        <img src={each.logo} alt={each.cmpName} className="cmpLogos" />
      </h4>
      <div>
        <div className="techContainer">
          <p className="techPara">
            <span className="techSpan">Tech Stack used:</span> {each.tech_stack}
          </p>
        </div>

        <div className="ButtonsContainer">
          <a href={each.URl} className="clickMeBtn">
            Click Me <FaArrowUpRightFromSquare />
          </a>{" "}
          <a href={each.gitUrl} className="gitLogo">
            <FaGitAlt />
          </a>
        </div>
      </div>
    </div>
  ));

  const myInternShipProject = snipData[1].map((each) => (
    <div className="CompanyAssignmentContainer">
      <h4 className="companyNameContainer">
        {each.cmpName}{" "}
        <img src={each.logo} alt={each.cmpName} className="cmpLogos" />
      </h4>
      <div>
        <div className="techContainer">
          <p className="techPara">
            <span className="techSpan">Tech Stack used:</span> {each.tech_stack}
          </p>
        </div>

        <div className="ButtonsContainer">
          <a href={each.URl} className="clickMeBtn">
            Click Me <FaArrowUpRightFromSquare />
          </a>{" "}
          <a href={each.gitUrl} className="gitLogo">
            <FaGitAlt />
          </a>
        </div>
      </div>
    </div>
  ));

  const selfEvalutionProject = snipData[2].map((each) => (
    <div className="CompanyAssignmentContainer">
      <h4 className="companyNameContainer">
        {each.cmpName}{" "}
        <img src={each.logo} alt={each.cmpName} className="cmpLogos" />
      </h4>
      <div>
        <div className="techContainer">
          <p className="techPara">
            <span className="techSpan">Tech Stack used:</span> {each.tech_stack}
          </p>
        </div>

        <div className="ButtonsContainer">
          <a href={each.URl} className="clickMeBtn">
            Click Me <FaArrowUpRightFromSquare />
          </a>{" "}
          <a href={each.gitUrl} className="gitLogo">
            <FaGitAlt />
          </a>
        </div>
      </div>
    </div>
  ));

  const nxtWaveAssignments = snipData[3].map((each) => (
    <div className="CompanyAssignmentContainer">
      <h4 className="companyNameContainer02">
        {each.Name}{" "}
        <a href={each.url} className="clickMeBtn02 ButtonsContainer">
          Click Me <FaArrowUpRightFromSquare />
        </a>
      </h4>
    </div>
  ));

  return (
    <div className="SnippetsContainer">
      <div className="SnipContainer">
        <h1 className="text-info cmpHeadEl">Companies Assignments</h1>
        {CompanyAssignments}
        <h1 className="text-success cmpHeadEl">Internship Task</h1>
        {myInternShipProject}
        <h1 className="text-info cmpHeadEl">Self Evaluation Assignments</h1>
        {selfEvalutionProject}
        <h1 className="text-primary cmpHeadEl">
          NxtWave Assignments{" "}
          <img
            src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg"
            alt="nxtWave"
            className="nxtWaveLogo"
          />
        </h1>
        {nxtWaveAssignments}
      </div>
      <Footer />
    </div>
  );
};

export default Snippets;
