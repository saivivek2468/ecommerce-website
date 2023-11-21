import React from "react";
import Header from "./Header";
import styles from "./Hero.module.css";
import HeroImage from "../assets/home/desktop/image-hero.jpg";
import Slider from "react-slick";

import headPhones59 from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import headPhone99MarkOne from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import headPhone99MarkTwo from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

import YX1Earphone from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

import zx7Speaker from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import zx9Speaker from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import { Link } from "react-router-dom";

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: "linear",
};
const Hero = () => {
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <Link to="/headphone/3">
          {" "}
          <div>
            <img src={headPhones59} className={styles.sliderImage} />
          </div>
        </Link>

        <Link to="/headphone/2">
          {" "}
          <div>
            <img src={headPhone99MarkOne} className={styles.sliderImage} />
          </div>
        </Link>

        <Link to="/headphone/1">
          <div>
            <img src={headPhone99MarkTwo} className={styles.sliderImage} />
          </div>
        </Link>
        <Link to="/speaker/5">
          <div>
            <img src={zx7Speaker} className={styles.sliderImage} />
          </div>
        </Link>
        <Link to="/speaker/4">
          <div>
            <img src={zx9Speaker} className={styles.sliderImage} />
          </div>
        </Link>
        <Link to="/earphone/6">
          <div>
            <img src={YX1Earphone} className={styles.sliderImage} />
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Hero;
