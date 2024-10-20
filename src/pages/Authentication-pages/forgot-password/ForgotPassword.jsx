import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./forgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  console.log(LoginData);

  return (
    <div className="container">
      <div className="card">
        <h1>Forgot Password</h1>
        <form className="login-from" onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-field__wrapper">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email.."
                value={LoginData.email}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-field__wrapper">
              <input
                type={ShowPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password.."
                value={LoginData.password}
                onChange={(e) => inputChangeHandler(e)}
              />
              <span
                className="showHide__icon"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {ShowPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
              </span>
            </div>
          </div>

          {/*           
          <div className="input-group">
            <button type="submit">Log In</button>
          </div>

          <div className="links">
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password
            </Link>
            <p>
              Don't have any Account &nbsp;
              <Link to="/sign-up" className="forgot-password">
                Sign Up
              </Link>
            </p>
          </div> */}

          <Link to={"/login"} style={{ color: "blue" }}>
            Back to Log In Page
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
