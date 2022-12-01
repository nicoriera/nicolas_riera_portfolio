import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3,
  faReact,
  faGit,
  faSquareJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faUser,
  faEnvelope,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faHouse,
  faUser,
  faEnvelope,
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3,
  faReact,
  faGit,
  faSquareJs,
  faNodeJs,
  faFolder
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
