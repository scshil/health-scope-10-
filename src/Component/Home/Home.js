import React from "react";
import "./Home.css";
import picture from "../../images/home-background.jpg";

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
        <button>Appointment</button>
      </div>
      {/* images */}
      <img id="image" src={picture} alt="" srcset="" />
    </div>
  );
};

export default Home;
