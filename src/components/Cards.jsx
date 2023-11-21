import React from "react";
import styles from "./Cards.module.css";
import ImageGallery3 from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import markTwoHeadphones from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import markOneHeadphones from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx59Headphones from "../assets/shared/desktop/image-xx59-headphones.jpg";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <>
      <div className={styles.cardContainer}>
        {[1, 2, 3].map((num) => (
          <>
            <div key={num} className={styles.bgColor}>
              <h3>Keep shopping for</h3>
              <div className={styles.container}>
                <Link to="/earphone/6">
                  {" "}
                  <div>
                    <img src={ImageGallery3} alt="image-gallery-3" />
                    <p>Earphones</p>
                    <p>$300</p>
                  </div>
                </Link>
                <Link to="/earphone/6">
                  <div>
                    <img src={markTwoHeadphones} alt="image-gallery-3" />
                    <p>Earphones</p>
                    <p>$300</p>
                  </div>
                </Link>
                <Link to="/earphone/6">
                  <div>
                    <img src={markOneHeadphones} alt="image-gallery-3" />
                    <p>Earphones</p>
                    <p>$300</p>
                  </div>
                </Link>
                <Link to="/earphone/6">
                  <div>
                    <img src={xx59Headphones} alt="image-gallery-3" />
                    <p>Earphones</p>
                    <p>$300</p>
                  </div>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className={styles.cardContainer}>
        {[1, 2, 3].map((num) => (
          <div className={styles.bgColor} key={num}>
            <h3>Keep shopping for</h3>
            <div className={styles.container}>
              <Link to="/earphone/6">
                <div>
                  <img src={ImageGallery3} alt="image-gallery-3" />
                  <p>Earphones</p>
                  <p>$300</p>
                </div>
              </Link>
              <Link to="/earphone/6">
                <div>
                  <img src={markTwoHeadphones} alt="image-gallery-3" />
                  <p>Earphones</p>
                  <p>$300</p>
                </div>
              </Link>
              <Link to="/earphone/6">
                <div>
                  <img src={markOneHeadphones} alt="image-gallery-3" />
                  <p>Earphones</p>
                  <p>$300</p>
                </div>
              </Link>
              <Link to="/earphone/6">
                <div>
                  <img src={xx59Headphones} alt="image-gallery-3" />
                  <p>Earphones</p>
                  <p>$300</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
