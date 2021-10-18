import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";

const Doctors = () => {
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    fetch("./doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);

  return (
    <div className="doctors-bg">
      <div className="container  ">
        <h2>Our Doctors</h2>
        <div className="row row-cols-3  g-5 mt-3 ">
          {doctor.map((doc) => (
            <Doctor key={doctor?.index} doctor={doc}></Doctor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
