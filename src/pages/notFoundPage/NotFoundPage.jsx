import { Link } from "react-router-dom";
import styleSheet from "./NotFoundPage.module.css";

const PhotoGalaryPage = () => {
  document.title = "Not Found Page | Ecopaper Recycle Company";

  return (
    <div className={styleSheet.container}>
      <div className={styleSheet.box}>
        <h1 className={styleSheet.error_code}>404 </h1>
        <h2 className={styleSheet.error_caption}>
          Error Occured - 404, Page Not Found.!
        </h2>
        <hr className={styleSheet.hr} />
        <br />
        <p className={styleSheet.error_paragraph}>
          The page you requested could not found. <br />
          If you think the page you searched for is already broken or doesn't
          exist...!
        </p>
        <br />
        <nav>
          <Link to="/">
            <button className={styleSheet.btn}>Back to Home</button>
          </Link>
          <a href="mailto:refat3232@gmail.com">
            <button className={styleSheet.btn}>Contact With Email</button>
          </a>
          <a href="tel:+8801811417787">
            <button className={styleSheet.btn}>Contact With Whatsapp</button>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default PhotoGalaryPage;
