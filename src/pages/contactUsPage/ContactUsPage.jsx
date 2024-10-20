import AppHeader from "../../components/header/AppHeader";
import AppFooter from "../../components/footer/AppFooter";
import { FaEnvelope } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  document.title = "Contact Us | Hafeez Uddin Tizarah & Trade Company";

  return (
    <>
      <div className="hero-section contact-page">
        <div className="hero-container">
          <h2>Contact with Us</h2>
          <p>
            For all urgent queries contact our Client Support Executive via
            <span style={{color:"var(--third-color)",fontWeight:500}}> Whatsapp </span>on their direct numbers. All queries are answered within <span style={{color:"var(--fourth-color)",fontWeight:500}}> 24 </span>
            hours during work days.
          </p>
        </div>
      </div>
      <div className="contact-info-container">
        <div className="contact-information">
          <h4>Address & Location</h4>
          <p style={{ marginBlock: "0.6rem", fontWeight: "600",fontSize:"18px" }}>
            Ecopaper Recycle Company
          </p>
          <p>10 Shahid Nazrul Islam Sharak,</p>
          <p>Hatkola Road, Tikatoli,</p>
          <p>Dhaka - 1203, Bangladesh</p>
        </div>
        <div className="contact-information">
          <h4>Opening Days & Hours</h4>
          <b>Saturday to Thursday : 10am – 6pm</b>
          <p>24 Hours Customer Support Service</p>
          <strong className="alarm">Friday: Closed</strong>
        </div>
        <div className="contact-information">
          <h4>E-mail </h4>
          <div className="box">
            <span className="icon-wrapper">
              <FaEnvelope />
            </span>
            <a
              className="contanct-link"
              target="_self"
              href="mailto:refat3232@gmail.com"
            >
              refat3232@gmail.com
            </a>
          </div>
          <div className="box">
            <span className="icon-wrapper">
              <FaEnvelope />
            </span>
            <a
              className="contanct-link"
              target="_self"
              href="mailto:redoy3232@gmail.com"
            >
              redoy3232@gmail.com
            </a>
          </div>
          <div className="box">
            <span className="icon-wrapper">
              <TbWorldWww />
            </span>
            <a
              className="contanct-link"
              target="_blank"
              href="https://www.ecopaperrecycle.com"
            >
              www.ecopaperrecycle.com
            </a>
          </div>
        </div>
        <div className="contact-information">
          <h4>Phone</h4>
          <a className="contanct-link" href="tel:+8801811417787">
            <strong>Call: </strong> +8801811417787
          </a>
        </div>
      </div>
      <div className="map-wrapper">
        <h2 className="map-heading">See Location In this map</h2>
        <div className="map-iframe-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7568.601734955747!2d90.41634413943518!3d23.71926011997725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85240f2bec7%3A0xdcb27bac44a537f1!2sTikatuly%20Jame%20Masjid!5e1!3m2!1sen!2sbd!4v1721277259861!5m2!1sen!2sbd"
            style={{ border: "0px", width: "100%", height: "100%" }}
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
