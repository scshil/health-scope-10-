import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Carousel } from "react-bootstrap";
import doctors from "../../images/doctors.png";
import services from "../../images/services.jpg";
import awards from "../../images/Awards & Honors.jpg";
import hospital1 from "../../images/hospital-image1.jpg";
import hospital2 from "../../images/hospital-image2.jpg";
import hospital3 from "../../images/hospital-image3.jpg";
// import picture from "../../images/cover-about.jpg";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="about-background">
        <h1>
          Scroll Down To know About <span>H</span>ealth<span>S</span>cope
        </h1>
      </div>
      <div className="row h-50 w-100 justify-content-evenly align-items-center">
        {/* carusole */}
        <div className="col p-5">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                height="300px"
                className="d-block w-100"
                src={hospital1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                height="300px"
                className="d-block w-100"
                src={hospital2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                height="300px"
                className="d-block w-100"
                src={hospital3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        {/* text */}
        <div className="col">
          <p>
            Inadequate healthcare facilities in both public and private sectors
            of Bangladesh are forcing a significant number of patients every
            year to travel abroad to seek treatment at greater financial,
            psychological and physical suffering. Available information
            indicates around USD 500 million is being spent outside the country
            every year by patients for healthcare.
          </p>
          <p>
            A state-of-art facility coupled with experienced medical, clinical
            and administrative staff with the aim to provide outstanding
            customer services are available at “<span>H</span>ealth
            <span>S</span>cope”, Chittagong.
          </p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row row-cols-3">
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img className="img-about" variant="top" src={awards} />
              <Card.Body>
                <Card.Title>Award's</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img className="img-about" variant="top" src={doctors} />
              <Card.Body>
                <Card.Title>Doctor's</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img className="img-about" variant="top" src={services} />
              <Card.Body>
                <Card.Title>Service's</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* text */}
    </div>
  );
};

export default About;
