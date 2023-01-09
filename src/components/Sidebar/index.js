import "./index.scss";
import AnimatedLettersInitial from "../AnimatedLettersInitial";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const [letterClass, setLetterClass] = useState("text-animate-initial");
  const aboutArray = "NR".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-initial-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <h1>
              <AnimatedLettersInitial
                letterClass={letterClass}
                strArray={aboutArray}
                idx={15}
              />
            </h1>
            {/* <h3 className="logo-initial">NR</h3> */}
          </NavLink>
        </div>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon="fa-solid fa-house" color="#fff" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon="fa-solid fa-user" color="#fff" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon="fa-solid fa-folder" color="#fff" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon="fa-solid fa-envelope" color="#fff" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/nicolasriera/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" color="#fff" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nicoriera"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" color="#fff" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
