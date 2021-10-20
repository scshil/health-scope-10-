import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [singleDetails, setSignleDetails] = useState({});
  useEffect(() => {
    // let url = `./services.json`;
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  // console.log(details);
  useEffect(() => {
    const selectedService = details.find((detail) => detail?._id === id);
    setSignleDetails(selectedService);
  }, [details]);
  // const { name, email, about, phone } = singleDetails;
  return (
    <div className="serviceDetails-bg">
      <h2 className="heading">{singleDetails?.name}</h2>
      <img height="200px" src={singleDetails?.picture} alt="" srcset="" />
      <div className="container  mt-5 ">
        <p>{singleDetails?.about}</p>
        <div className="contact">
          <h6>
            <span>Email:</span>
            {singleDetails?.email}
          </h6>
          <h6>
            <span>Phone:</span>
            {singleDetails?.phone}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
