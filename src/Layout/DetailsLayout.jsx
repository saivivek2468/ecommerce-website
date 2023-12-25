import React, { useState } from "react";
import styles from "./DetailsLayout.module.css";
import { HeaderPart } from "../components/Header";
import PreviewImage from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context.jsx";
import { ToastContainer, toast } from "react-toastify";
import Slider from "react-slick";

import headPhones59 from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import headPhone99MarkOne from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import headPhone99MarkTwo from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

import YX1Earphone from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

import zx7Speaker from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import zx9Speaker from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";

const DetailsLayout = ({ data = [] }) => {
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { setCartData, cartData, getCartCount } = useGlobalContext();
  const [updCart, setUpdatedCart] = useState([]);
  const [modalShown, toggleModal] = React.useState(false);

  const onAddToCart = () => {
    const removeDuplicateCartData = updCart.filter(
      (obj, index) => index === updCart.findLastIndex((o) => o.id === obj.id)
    );
    setCartData((prevDataCart) => [
      ...prevDataCart,
      ...removeDuplicateCartData,
    ]);
  };

  const onIncreaseCart = (id, data) => {
    const cart = updCart.length === 0 ? [data] : updCart;
    const updatedCart = cart.map((cdata) =>
      cdata.id === id ? { ...cdata, cartCount: ++cdata.cartCount || 1 } : cdata
    );
    setUpdatedCart(updatedCart);
  };

  const onDecreaseCart = (id, data) => {
    const cart = updCart.length === 0 ? [data] : updCart;
    const updatedCart = cart.map((cdata) =>
      cdata.id === id ? { ...cdata, cartCount: --cdata.cartCount || 1 } : cdata
    );
    setUpdatedCart(updatedCart);
  };

  return (
    <div>
      <HeaderPart
        isPadding={true}
        modalShown={modalShown}
        toggleModal={toggleModal}
        cartData={cartData}
        getCartCount={getCartCount}
      />
      <div className={styles.container}>
        <div className={styles.back} onClick={() => navigate(-1)}>
          Go Back
        </div>

        {/* <img src={PreviewImage} /> */}
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {" "}
            <div>
              <img src={headPhones59} className={styles.sliderImage} />
            </div>{" "}
            <div>
              <img src={headPhone99MarkOne} className={styles.sliderImage} />
            </div>
            <div>
              <img src={headPhone99MarkTwo} className={styles.sliderImage} />
            </div>
            <div>
              <img src={zx7Speaker} className={styles.sliderImage} />
            </div>
            <div>
              <img src={zx9Speaker} className={styles.sliderImage} />
            </div>
            <div>
              <img src={YX1Earphone} className={styles.sliderImage} />
            </div>
          </Slider>
        </div>

        <div className={styles.productDetails}>
          {data.isNewProduct && <h3>NEW PRODUCT</h3>}
          <h2>{data.heading}</h2>
          <p className={styles.paragraph}>{data.paragraph}</p>
          <p className={styles.price}>${data.price}</p>
          <div className={styles.buttons}>
            <button className={styles.count}>
              <span
                onClick={() => onIncreaseCart(data.id, data)}
                className={styles.plus}
              >
                +
              </span>
              <span className={styles.number}>
                {updCart[0]?.cartCount || 0}
              </span>{" "}
              <span
                onClick={() => onDecreaseCart(data.id, data)}
                className={styles.negative}
              >
                -
              </span>
            </button>
            <button
              className={styles.btn}
              onClick={() => {
                onAddToCart(data);
                toast("Added to the cart successfully");
              }}
              disabled={updCart[0]?.cartCount === undefined}
            >
              ADD TO CART
            </button>
          </div>
        </div>

        {/* features */}
        <div className={styles.details}>
          <div className={styles.features}>
            <h1>FEATURES</h1>
            <p className={styles.paragraph}>{data.features.paragraph1}</p>
            <p className={styles.paragraph}> {data.features.paragraph2}</p>
          </div>

          {/* features */}
          {/* box */}
          <div className={styles.box}>
            <h1>IN THE BOX</h1>
            <ul>
              {data.boxList.map((box) => (
                <li key={box.title}>
                  <span>{box.quantity}x</span>
                  {box.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* box */}
        {/* gallery */}
        <div className={styles.gallery}>
          <figure className={styles.galleryImage1}>
            <img src={data.images[0]} className={styles.galleryImage} />
          </figure>
          <figure className={styles.galleryImage3}>
            <img src={data.images[2]} className={styles.galleryImage} />
          </figure>
          <figure className={styles.galleryImage2}>
            <img src={data.images[1]} className={styles.galleryImage} />
          </figure>
        </div>
        {/* gallery */}

        {/* you may also like */}
        <div className={styles.similarProducts}>
          <h1>you may also like</h1>
          <div className={styles.details}>
            {data.similarProducts.map((product) => (
              <div className={styles.prodDetails} key={product.title}>
                <img src={product.img} />
                <h3>{product.title}</h3>
                <Link to={product.link}>
                  <button>SEE PRODUCT</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* you may also like */}
      </div>
      <ToastContainer theme="light" />
    </div>
  );
};

export default DetailsLayout;
