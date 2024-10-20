import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [IsLoading, setIsLoading] = useState(false);
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
        <h1 className="page-heading">Log In to your account</h1>
        <form className="login-from" onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-field__wrapper">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email.."
                value={LoginData.email}
                onChange={(e) => inputChangeHandler(e)}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <label htmlFor="password">Password</label>
            <Link to={"/forgot-password"} className="forgot-password">
            Forgot Password
          </Link>
            </div>

            <div className="input-field__wrapper">
              <input
                type={ShowPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password.."
                value={LoginData.password}
                onChange={(e) => inputChangeHandler(e)}
                required
              />
              <span
                className="showHide__icon"
                title={ShowPassword ? "Hide Password" : "Show Password"}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {ShowPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
              </span>
            </div>
          </div>
        
          <div className="input-group">
            <button
              disabled={IsLoading ? "disabled" : ""}
              type="submit"
              className="btn"
            >
              {IsLoading ? "Loading.." : "Log In"}
            </button>
          </div>

          <div className="links">
            <p>
              Don't have any Account ?&nbsp;
              <Link to={"/signup"} className="forgot-password">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
