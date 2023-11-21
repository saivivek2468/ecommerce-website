import React from "react";
import GearImage from "../assets/shared/desktop/image-best-gear.jpg";
import styles from "./Gear.module.css";

const Gear = () => {
  return (
    <div className={styles.gearContainer}>
      <div className={styles.gearDetails}>
        <h1>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={styles.gearImage}>
        <img src={GearImage} alt="gearImage" />
      </div>
    </div>
  );
};

export default Gear;
