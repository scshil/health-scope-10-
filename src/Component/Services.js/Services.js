import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h2>welocme to services</h2>
      <div className="container mt-5">
        <div className="row row-cols-3  g-5 ">
          {service.map((ser) => (
            <Service key={ser._id} service={ser}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
