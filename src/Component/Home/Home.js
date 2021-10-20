import React from "react";
import "./Home.css";
import picture from "../../images/home-background.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Home = () => {
  return (
    <div
      id="home-background"
      className="d-flex justify-content-evenly align-items-center "
    >
      {/* text */}
      <div>
        <h2>
          welcome to <span className="text-style">H</span>ealth{" "}
          <span className="text-style">S</span>COPE
        </h2>
        <Link to="/appoinment">
          <Button>Appoinment</Button>
        </Link>
      </div>
      {/* images */}
      <img id="image" src={picture} alt="" srcset="" />
    </div>
  );
};

export default Home;
