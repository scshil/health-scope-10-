import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import useAuth from "../../Hook/useAuth";
// import useFirebase from "../../Hook/useFirebase";

const Header = () => {
  const { logOut, user } = useAuth();
  // const { logOut, user } = useFirebase();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <span className="text-style1">H</span>ealth
            <span className="text-style1">S</span>cope
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
            {user.email && (
              <span>
                <strong style={{ color: "orange" }}>
                  {" "}
                  Hlw! {user?.displayName}
                </strong>
              </span>
            )}
            &nbsp;
            {user.email ? (
              <Button id="logout" onClick={logOut} variant="secondary">
                {" "}
                <FontAwesomeIcon icon={faSignOutAlt} /> &nbsp;{" "}
                <span>logout</span>
              </Button>
            ) : (
              <NavLink to="/login">
                <Button id="login" variant="secondary">
                  <FontAwesomeIcon icon={faSignInAlt} /> &nbsp;{" "}
                  <span>Login</span>
                </Button>
              </NavLink>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
