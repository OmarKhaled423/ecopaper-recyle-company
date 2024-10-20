import "./AppFooter.css";
import { NavLink } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { FiInstagram } from "react-icons/fi";
import { useState } from "react";

const AppFooter = () => {
  let [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    const pattern = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const subcribtionEmailHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.email.value)
    // getEmail(e.target.email.value);
    if (!email || !isValidEmail(email)) {
      alert("Please enter an valid Email address..!");
    } else {
      alert(`You have Subscribed Successfully..!\n${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Bangladesh</h4>
          <h5 className="company-name">Ecopaper Recycle Company</h5>
          <p>10 Shahid Nazrul Islam Sharak,</p>
          <p>Hatkola Road, Tikatoli,</p>
          <p>Dhaka - 1203</p>
          <p>Phone: +8801811417787</p>
        </div>
        <nav className="footer-section">
          <h4>Important Links</h4>
          <NavLink to="/products">
            <p>Products</p>
          </NavLink>
          <NavLink to="/contact-us">
            <p>Contact Us</p>
          </NavLink>
          <NavLink to="/about-us">
            <p>About Us</p>
          </NavLink>
        </nav>
        <div className="footer-section">
          <h4>Follow Us With</h4>
          <p>Stay up to date with latest industry news</p>
          <form
            onSubmit={subcribtionEmailHandler}
            id="subscribtion-form"
            className="subscribtion-form"
          >
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="subscribtion__input-field"
              type="email"
              name="email"
              title="This Email will be Use to know you about our Update Every Movement."
              placeholder="Enter Your Email..."
              required
            />
            <button type="submit" className="subscribtion__button">
              Subscribe
            </button>
          </form>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61560667595048"
              target="_blank"
              title="Follow on Facebook"
              className="icon-box"
              style={{ backgroundColor: "#ffffff" }}
            >
              <FaFacebookF color="#1877F2" />
            </a>
            <a
              href="https://sa.linkedin.com/in/refat-hussain"
              target="_blank"
              className="icon-box"
              title="Follow on Linkedin"
              style={{ backgroundColor: "#ffffff" }}
            >
              <FaLinkedinIn color="#1877F2" />
            </a>
            <a
              href="https://www.youtube.com/@mdrifathafezuddin4918"
              target="_blank"
              className="icon-box"
              title="Follow on Youtube"
              style={{ backgroundColor: "#ffffff" }}
            >
              <IoLogoYoutube color="#ff0000" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright {new Date().getFullYear()} © All Rights Reserved by Ecopaper
          Recycle Company for Paper Trading.
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
