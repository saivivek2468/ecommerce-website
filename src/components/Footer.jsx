import styles from "./Footer.module.css";
import FacebookImage from "../assets/shared/desktop/icon-facebook.svg";
import InstagramImage from "../assets/shared/desktop/icon-instagram.svg";
import TwitterImage from "../assets/shared/desktop/icon-twitter.svg";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerDetails}>
        <h2>audiophile</h2>
        <p className={styles.paragraph}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <p className={styles.copyRight}> Copyright 2023. All Rights Reserved</p>
      </div>
      <div className={styles.footerLinks}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/headphones">
            {" "}
            <li>Headphones</li>
          </Link>
          <Link to="/speakers">
            <li>Speakers</li>
          </Link>
          <Link to="/earphones">
            {" "}
            <li>Earphones</li>
          </Link>
        </ul>
        <div className={styles.socialLinks}>
          <a href="www.facebook.com" target="_blank">
            <img src={FacebookImage} alt="facebook" />
          </a>
          <img src={InstagramImage} alt="instagram" />
          <img src={TwitterImage} alt="twitter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
