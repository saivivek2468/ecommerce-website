import React from "react";

import styles from "./Category.module.css";
import headphoneImage from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImage from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphoneImage from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ZX9SpeakerImage from "../assets/home/desktop/image-speaker-zx9.png";
import PatternImage from "../assets/home/desktop/pattern-circles.svg";
import ZX7SpeakerImage from "../assets/home/desktop/image-speaker-zx7.jpg";
import earphoneyx1Image from "../assets/home/desktop/image-earphones-yx1.jpg";
import CategoryList from "./CategoryList";
import { Link } from "react-router-dom";

export const categories = [
  {
    id: 1,
    image: headphoneImage,
    heading: "HEADPHONES",
    path: "/headphones",
  },
  {
    id: 2,
    image: speakerImage,
    heading: "SPEAKERS",
    path: "/speakers",
  },
  {
    id: 3,
    image: earphoneImage,
    heading: "EARPHONES",
    path: "/earphones",
  },
];

const Category = () => {
  return (
    <>
      <CategoryList />
      {/* //one block */}
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <img src={PatternImage} className={styles.pattern} />
          <div className={styles.flex}>
            <div className={styles.img}>
              <img src={ZX9SpeakerImage} />
            </div>
            <div className={styles.boxDetails}>
              <h1>ZX9 SPEAKER</h1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link to="/speaker/4">
                {" "}
                <button>see Product</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* second block */}
      <div className={styles.secondBoxContainer}>
        <div className={styles.speakerDetails}>
          <h1>ZX7 Speaker</h1>
          <Link to="/speaker/5">
            <button>SEE PRODUCT</button>
          </Link>
        </div>
        <img src={ZX7SpeakerImage} />
      </div>

      {/* THIRD BLOCK */}
      <div className={styles.thirdBoxContainer}>
        <div>
          <img src={earphoneyx1Image} />
        </div>
        <div className={styles.earphoneDetails}>
          <h1>YX1 EARPHONES</h1>
          <Link to="/earphone/6">
            {" "}
            <button>SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Category;
