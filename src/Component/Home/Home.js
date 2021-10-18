import React from "react";
import "./Home.css";
import picture from "../../images/home-background.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      id="home-background"
      className="d-flex justify-content-evenly align-items-center "
    >
      {/* text */}
      <div>
        <h2>
          welcome to <span>H</span>ealth <span>S</span>COPE
        </h2>
        <Link to="/appoinment">
          <button>Appointment</button>
        </Link>
      </div>
      {/* images */}
      <img id="image" src={picture} alt="" srcset="" />
    </div>
  );
};

export default Home;
