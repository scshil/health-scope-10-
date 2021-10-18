import React from "react";
import "./Login.css";
import login from "../../images/login-image.jpg";
import gmail from "../../images/gamil.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-page">
      <div>
        <img src={login} alt="" srcset="" />
      </div>
      <div className="login-bg">
        <h1>login</h1>
        <hr />
        <div className="container">
          <h5>Email</h5>
          <FontAwesomeIcon icon={faEnvelope} /> &nbsp; &nbsp;
          <input
            className="input-fild"
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <h5>Password</h5>
          <FontAwesomeIcon icon={faUnlock} /> &nbsp;
          <input
            className="input-fild"
            type="password"
            name=""
            id=""
            placeholder="Enter password"
          />
          {/* more way to login */}
          <div className="mt-5">
            <h6> Or Login with</h6>
            <div className="">
              <button>
                {" "}
                <img height="20px " src={gmail} alt="" srcset="" />
              </button>
            </div>
          </div>
          {/* sign up */}
          <div className="mt-5">
            <h6>
              New user? <Link>Sign-up</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
