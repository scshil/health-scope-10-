import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <span>H</span>ealth<span>S</span>cope
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
