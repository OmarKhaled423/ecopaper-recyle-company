import React from "react";
import WebsiteLogo from "/httc-logo.jpeg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.website__logo_wrapper}>
      <div className={styles.logo__image_wrapper}>
        <img
          className={styles.logo__image}
          src={WebsiteLogo}
          alt="website logo"
          title="website logo"
        />
      </div>
      <div
        className={styles.logo__title_wrapper}
        title="Ecopaper Recycle Company"
      >
        <h1 className={styles.logo__title_text}>Ecopaper Recycle Company</h1>
        <p className={styles.logo__sub_describtion}>A Paper Tading Company.</p>
      </div>
    </div>
  );
};

export default Logo;
