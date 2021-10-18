import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Doctor.css";
const Doctor = (props) => {
  const { name, picture, about } = props.doctor;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img height="200px" variant="top" src={picture} />
        <Card.Body className="">
          <Card.Title>Dr.{name}</Card.Title>
          <Card.Text>{about}</Card.Text>
          <Link to="/appoinment">
            <Button variant="primary">Make appoinment</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Doctor;
