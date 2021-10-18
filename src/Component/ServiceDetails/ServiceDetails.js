import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    let url = `./services.json${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h2>welcome to service details {id}</h2>
      {/* <h1>hlw {details.name}</h1> */}
    </div>
  );
};

export default ServiceDetails;
