import "./index.scss";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => (
  <div className="nav-bar">
    <div className="logo">
      <h3 className="logo-initial">NR</h3>
      <p>Nicolas RIERA</p>
    </div>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon="fa-solid fa-house" color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon="fa-solid fa-user" color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon="fa-solid fa-envelope" color="#4d4d4e" />
      </NavLink>
    </nav>
  </div>
);

export default Sidebar;
