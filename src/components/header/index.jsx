import {Link} from "react-router-dom";
import React from "react";

const links = [
  {
    "text": "State Browser",
    "href": "state"
  }
];

const Header = (props) => (
  <nav className="navbar navbar-expand-lg">
    <Link className="navbar-brand" to="/">
      Population
    </Link>
    <div className="collapse navbar-collapse" id="navbarLinks">
      <ul className="nav navbar-nav">
        {
          links.map(link => (
            <li
              className="nav-item"
              key={`NavItem: ${link.text}`}
            >
              <Link
                className="nav-link"
                to={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  </nav>
);

export default Header;
