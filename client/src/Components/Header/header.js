import React, { Component } from "react";
import "./header.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" className="header">
          <Navbar.Brand href="#home">COVID-19 TRACKER</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="header__link">
              <Nav>
                <Nav.Link className="header__link--color">World</Nav.Link>
                <Nav.Link className="header__link--color">Canada</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
