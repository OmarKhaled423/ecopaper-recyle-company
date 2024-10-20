import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./signup.css";
import { Link } from "react-router-dom";
import Logo from "../../../components/logo/Logo";

const Signup = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [ShowPassword, setShowPassword] = useState(false);
  const [ConfirmShowPassword, setConfirmShowPassword] = useState(false);
  const [SignupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  console.log(SignupData);

  return (
    <div className="container">
      <div className="card">
        {/* <div>
          <Logo />
        </div> */}
        <div className="card__content">
          <h1 className="page-heading">Create an account</h1>
          <form className="signup-from" onSubmit={submitHandler}>
            <div className="input-group">
              <label htmlFor="username">User Name</label>
              <div className="input-field__wrapper">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your name.."
                  value={SignupData.username}
                  onChange={(e) => inputChangeHandler(e)}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-field__wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email.."
                  value={SignupData.email}
                  onChange={(e) => inputChangeHandler(e)}
                  required
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
                  value={SignupData.password}
                  onChange={(e) => inputChangeHandler(e)}
                  required
                />
                <span
                  className="showHide__icon"
                  title={ShowPassword ? "Hide Password" : "Show Password"}
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {ShowPassword ? (
                    <FaEye size={18} />
                  ) : (
                    <FaEyeSlash size={18} />
                  )}
                </span>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="input-field__wrapper">
                <input
                  type={ConfirmShowPassword ? "text" : "password"}
                  id="confirm-password"
                  name="confirmPassword"
                  placeholder="Enter your confirm password.."
                  value={SignupData.confirmPassword}
                  onChange={(e) => inputChangeHandler(e)}
                  required
                />
                <span
                  className="showHide__icon"
                  title={
                    ConfirmShowPassword ? "Hide Password" : "Show Password"
                  }
                  onClick={() => setConfirmShowPassword((prev) => !prev)}
                >
                  {ConfirmShowPassword ? (
                    <FaEye size={18} />
                  ) : (
                    <FaEyeSlash size={18} />
                  )}
                </span>
              </div>
            </div>

            <div className="input-group">
              <button
                disabled={IsLoading ? "disabled" : ""}
                type="submit"
                className="btn"
              >
                {IsLoading ? "Loading.." : "Sign Up"}
              </button>
            </div>

            <div className="links">
              <p>
                Already have an Account ? &nbsp;
                <Link to={"/login"} className="forgot-password">
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
