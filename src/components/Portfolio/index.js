import { useState, useEffect } from "react";
import "./index.scss";
import { Loader } from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from "../../data/portfolio.json";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const portfolioArray = "Portfolio".split("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  const renderPortfolio = (portfolio) => {
    return (
      <div className="image-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <span>{port.title}</span>
              <span>{port.description}</span>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={portfolioArray}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="ball-clip-rotate" />
    </>
  );
};

export default Portfolio;
