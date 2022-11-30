import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Loader } from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const aboutArray = ["A", "b", "o", "u", "t", " ", "m", "e"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I'm junior developer looking for a job in company with opportunity
            to work with the latest technologies and diverse projects.
          </p>
          <p>
            I'm naturally curious, and I want to put my knowledge into practice
            and learn new ones.
          </p>
          <p>I' am father, a music fanatic, and love tech.</p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon="fa-brands fa-html5" color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon="fa-brands fa-css3" color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon="fa-brands fa-react" color="#5ED4FA" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon="fa-brands fa-git" color="#F44D27" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon="fa-brands fa-square-js" color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon="fa-brands fa-node-js" color="#43853D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate" />
    </>
  );
};

export default About;
