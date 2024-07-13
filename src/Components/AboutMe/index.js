import React from "react";
import "./index.css";
import Footer from "../Footer";
import myImage from "./Images/WhatsApp Image 2024-07-13 at 12.56.39 PM.jpeg";
import HtmlImg from "./Images/HtmlImg.jpg";
import CssImg from "./Images/CssImg.jpg";
import JsImg from "./Images/JsImg.jpg";
import BootStrapImg from "./Images/BootStrapImg.jpg";
import ReactImg from "./Images/Reactimg.jpg";

import PythonImg from "./Images/pyhtonImg.jpg";
import NodeImg from "./Images/NodeJsImg.jpg";

import SqliteImg from "./Images/Sqliteimg.jpg";
import MongoDb from "./Images/MongoDbimg.jpg";

import GitImg from "./Images/GitImg.jpg";

const AboutMe = () => {
  return (
    <div className="AboutMeOuterContainer">
      <div className="AboutMeCenterContainer">
        <h1 style={{ marginBottom: "35px" }} className="header01">
          Professional Full Stack Developer
        </h1>
        <div>
          {/* img and Des section */}
          <div className="imgAndDesSection">
            <div className="imagePhotoContainer">
              <img src={myImage} alt="MyImg" className="myImgPhoto" />
            </div>
            <div>
              <h4 className="desContent">
                I am a passionate full-stack developer with a strong foundation
                in web development technologies. Skilled in both frontend and
                backend development, I specialize in technologies like React.js
                for building responsive user interfaces, and Python with Express
                and Node.js for backend services.
              </h4>
              <h4 className="desContent">
                My experience includes creating innovative web applications such
                as Nxt Watch, a platform resembling YouTube, and e-commerce
                solutions inspired by Amazon and Flipkart. I hold a BSc in
                Computer Applications and continue to enhance my skills through
                industry-ready certifications and teaching assistant roles
              </h4>
              <h4 className="desContent">
                Recently, I contributed to web development projects at DMC
                PRO.in, where I developed and maintained websites while gaining
                expertise in version control and collaborative project
                management using Git.
              </h4>
            </div>
          </div>
          {/* Skills Section */}

          <div className="skillsSection">
            {" "}
            <h1>Skills</h1>
            <div>
              <h2>Frontend </h2>
              <hr />
              <div className="frontendContainer">
                <div>
                  <img src={HtmlImg} alt="Html" className="skillImg" />

                  <p className="skillText">HTML</p>
                </div>
                <div>
                  <img src={CssImg} alt="CSS" className="skillImg" />

                  <p className="skillText">CSS</p>
                </div>
                <div>
                  <img src={JsImg} alt="JS" className="skillImg" />

                  <p className="skillText">JS</p>
                </div>
                <div>
                  <img
                    src={BootStrapImg}
                    alt="BootStrap"
                    className="skillImg"
                  />

                  <p className="skillText">BootStrap</p>
                </div>
                <div>
                  <img src={ReactImg} alt="ReactJs" className="skillImg" />

                  <p className="skillText">ReactJs</p>
                </div>
              </div>
            </div>
            <div>
              <h2>Backend </h2>
              <hr />

              <div className="frontendContainer">
                <div>
                  <img src={PythonImg} alt="Python" className="skillImg" />

                  <p className="skillText">Python</p>
                </div>
                <div>
                  <img src={NodeImg} alt="Node.js" className="skillImg" />

                  <p className="skillText">Node.Js</p>
                </div>
              </div>
            </div>
            <div>
              <h2>DataBases </h2>
              <hr />

              <div className="frontendContainer">
                <div>
                  <img src={SqliteImg} alt="SQLite" className="skillImg" />

                  <p className="skillText">SQLite</p>
                </div>
                <div>
                  <img src={MongoDb} alt="MongoDB" className="skillImg" />

                  <p className="skillText">MongoDB</p>
                </div>
              </div>
            </div>
            <div>
              <h2>Others </h2>
              <hr />

              <div className="frontendContainer">
                <div>
                  <img src={GitImg} alt="Git" className="skillImg" />

                  <p className="skillText">github</p>
                </div>
              </div>
            </div>
          </div>
          {/* Experience*/}
          <div className="ExpAndEduSection">
            <h2>Experience</h2>
            <div className="ExperienceContainers">
              <h4>Web Developer Intern at DMC PRO.in(3 months)</h4>
              <div>
                <h6>
                  Played a key role in the development and maintenance of the
                  company's official website, ensuring a seamless user
                  experience and robust functionality.Contributed significantly
                  to the development of a comprehensive tourism website, which
                  included creating engaging layouts, integrating interactive
                  features, and optimizing for user engagement.Utilized Git for
                  version control to manage code changes efficiently and
                  collaborate effectively with team members.Worked closely with
                  team members in a remote setting, improving my communication
                  and teamwork skills.
                </h6>
              </div>
            </div>
            <div className="ExperienceContainers">
              <h4>NxtWave (Teaching Assistant )(Ongoing)</h4>
              <div>
                <h6>
                  I have assisted students in resolving issues related to HTML,
                  CSS, and responsive web design. Worked independently to manage
                  and address student queries, enhancing their learning
                  experience and satisfaction
                </h6>
              </div>
            </div>
          </div>
          {/* Education  */}
          <div className="ExpAndEduSection">
            <h2>Education </h2>
            <div className="ExperienceContainers">
              <h4>Nxtwave Disruptive Technologies</h4>
              <div>
                <p>Apr 2022 - Ongoing</p>
                <h6>Industry Ready Certification in Full-stack Development</h6>
              </div>
            </div>
            <div className="ExperienceContainers">
              <h4>Dr. B.R. AMBEDKAR OPEN UNIVERSITY, Hyderabad</h4>
              <div>
                <p>2021 - 2024</p>
                <h6>BSc (Bachelor of Science)_Computer Applications</h6>
              </div>
            </div>
            <div className="ExperienceContainers">
              <h4>ABHYAAS Junior College, Hyderabad</h4>
              <div>
                <p>2017 - 2019</p>
                <h6>Intermediate_MPC</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;
