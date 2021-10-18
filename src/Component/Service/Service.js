import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Service = (props) => {
  const { name, picture, _id } = props.service;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img height="200px" variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to={`/service/${_id}`}>
            <Button variant="primary">View More</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
