import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import useAuth from "../../Hook/useAuth";
import "./Register.css";
const Register = () => {
  const { emailInput, passwordInput, registrationBtn, error1 } = useAuth();
  return (
    <div className="register">
      <div className=" form-bg">
        <h1 style={{ padding: "20px" }}>Registration</h1>
        <div style={{ padding: "10px" }}>
          <div className="row mb-3">
            <label for="Name" className="col-sm-2 col-form-label">
              Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              Email:
            </label>
            <div className="col-sm-10">
              <input
                onBlur={emailInput}
                type="email"
                className="form-control"
                id="inputEmail3"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Password:
            </label>
            <div className="col-sm-10">
              <input
                onBlur={passwordInput}
                type="password"
                className="form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>
          <div>{error1 && <p> {error1}</p>}</div>
          <Link to="/done">
            {" "}
            <Button
              onClick={registrationBtn}
              // type="submit"
              className="btn btn-primary"
            >
              Register
            </Button>
          </Link>
        </div>
        {/* login */}
        <div>
          <p>
            Already have an Account?<Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
