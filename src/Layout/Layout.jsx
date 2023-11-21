import React from "react";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";

const Layout = ({ order, isNewProduct, img, heading, paragraph, link }) => {
  return (
    <div className={styles.layoutContainer}>
      <img src={img} style={{ order }} />
      <div className={styles.headPhonesDetails}>
        <h2>{isNewProduct && "NEW PRODUCT"}</h2>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
        <Link to={link}>
          {" "}
          <button>SEE PRODUCT </button>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
