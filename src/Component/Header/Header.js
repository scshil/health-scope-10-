import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <span>H</span>ealth<span>S</span>cope
          </Navbar.Brand>
          <Nav className="me-auto ">
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              className="link-style"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              className="link-style"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              className="link-style"
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              className="link-style"
              to="/doctors"
            >
              Dcotors
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              className="link-style"
              to="/appoinment"
            >
              Appoinment
            </NavLink>
          </Nav>
          <div>
            <NavLink to="/loin">
              <Button variant="secondary">
                <FontAwesomeIcon icon={faSignInAlt} /> &nbsp; Login
              </Button>
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
