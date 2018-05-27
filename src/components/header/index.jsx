import {Nav, NavItem, Navbar} from "react-bootstrap";
import React from "react";

const links = [
  {
    "text": "State Browser",
    "href": "state"
  }
];

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">
          Population
        </a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      {
        links.map(link => (
          <NavItem
            href={link.href}
            key={`NavItem: ${link.text}`}
          >
            {link.text}
          </NavItem>
        ))
      }
    </Nav>
  </Navbar>
);

export default Header;
