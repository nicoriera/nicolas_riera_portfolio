import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [" ", "N", "i", "c", "o", "l", "a", "s"];
  const jobArray = [
    "j",
    "u",
    "n",
    "i",
    "o",
    "r",
    " ",
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          junior web developer
        </h1>
        <h2>Junior Developer Web / Javascript / React</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
