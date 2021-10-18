import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    // let url = `./services.json`;
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  /*  useEffect(() => {
    const selectedService = details.find((select) => select?._id === id);
    console.log(selectedService);
  }, [details]); */

  return (
    <div>
      <h2>welcome to service details {id}</h2>
      <h1>hlw </h1>
    </div>
  );
};

export default ServiceDetails;
