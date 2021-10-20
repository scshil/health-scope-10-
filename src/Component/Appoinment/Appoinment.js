import React from "react";
import { Link } from "react-router-dom";
import "./Appoinment.css";
const Appoinment = () => {
  return (
    <div className="appoinment-bg ">
      <h1>--Appoinment--</h1>
      <div className="container mt-5 ">
        <form class="row g-3 p-5 appoinment-form mt-5">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Your Name
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Please enter your name"
            ></input>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Doctor's Name
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Please enter doctor name"
            ></input>
          </div>
          <div class="col-3">
            <label for="inputDate" class="form-label">
              Date
            </label>
            <input type="date" class="form-control" id="inputDate"></input>
          </div>

          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Slot
            </label>
            <select id="inputState" class="form-select">
              <option selected>Morning</option>
              <option>Evening</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Catagory
            </label>
            <select id="inputState" class="form-select">
              <option selected>New patient</option>
              <option>Regural patient</option>
            </select>
          </div>

          <div class="col-12">
            <Link to="/done">
              {" "}
              <button type="submit" class="btn btn-primary">
                Done
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appoinment;
