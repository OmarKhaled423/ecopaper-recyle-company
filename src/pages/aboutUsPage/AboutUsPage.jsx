import AppFooter from "../../components/footer/AppFooter";
import AppHeader from "../../components/header/AppHeader";
import "./AboutUsPage.css";

const AboutUsPage = () => {
  document.title = "About Us | Hafeez Uddin Tizarah & Trade Company";
  return (
    <>
      <div className="hero-section about-page">
        <div className="hero-container">
          <h2>Know About Us Who we are</h2>
        </div>
      </div>
      <div className="paragraph-wrapper">
        <h3>Why Ecopaper Recycle Company born ?</h3>
        <p className="about-paragraph">
          The Ecopaper Recycle Company born to start the concept of doing
          business together in a group as partners instead of buyers and sellers
          so that we can create something bigger than the sum of what each
          person can create their own.
        </p>
      </div>
      <div className="paragraph-wrapper">
        <h3>Our Story</h3>
        <p className="about-paragraph">
          Ecopaper Recycle Company was established by five talented colleagues
          having the same thought of creating partners rather than customers. We
          challenged the old concepts of buyers and sellers which we experienced
          in the last 2 years in the paper industry. We believe that
          opportunities increase when we help our partners win. A win for our
          partner is a win for us.
        </p>
      </div>
      <div className="paragraph-wrapper">
        <h3>What we do for our partners?</h3>
        <ul>
          <li>We use our rich experience of 12 years in the paper industry and share it with our partners to solve their problems.</li>
          <li>We assist our partners in sourcing all kinds of paper products from different mills worldwide according to their needs.</li>
          <li>We fulfill the requirements of various sizes and weights with private label.</li>
          <li>We are very flexible regarding our partners requirements.</li>
          <li>Our strength is our knowledge to find the best quality products which we delivers to our partners which are best for them.</li>
        </ul>

        <p>Till now we have successfully created 53 partners in 7 different countries in a really short period of time and still counting…</p>
      </div>
    </>
  );
};

export default AboutUsPage;
