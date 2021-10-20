import React from "react";
import { Link } from "react-router-dom";
import done from "../../images/process-done.png";
import "./ProcessDone.css";
import { Button } from "react-bootstrap";
const ProcessDone = () => {
  return (
    <div className="process-Done">
      <div className="tick">
        <h1>Done!!</h1>
        <img className="tick" src={done} alt="" srcset="" />
      </div>
      <Link to="/home">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};

export default ProcessDone;
