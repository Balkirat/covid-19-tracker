import React, { Component } from "react";
import "./header.scss";
import { NavLink, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" className="header">
          <Link style={{ textDecoration: "none" }} to="/">
            <Navbar.Brand >COVID-19 TRACKER</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="header__link">
              <Nav>
                <Link style={{ textDecoration: "none" }} to="/world">
                  <Nav className="header__link--color">
                    World
                  </Nav>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/canada">
                <Nav className="header__link--color">
                  Canada
                </Nav>
                </Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
