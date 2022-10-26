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
        <FontAwesomeIcon icon="fa-solid fa-house" />
      </NavLink>
    </nav>
  </div>
);

export default Sidebar;
