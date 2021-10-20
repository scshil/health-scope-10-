import React from "react";
import notFound from "../../images/banner_error_404.jpg";
import "./Notffound.css";
const Notfound = () => {
  return (
    <div className=" notfound-bg ">
      <div>
        <img src={notFound} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Notfound;
