import React from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import Icon from "../assets/ecommerce.svg";
import { HeaderPart } from "../components/Header";
import { useGlobalContext } from "../context/context";
import Footer from "../components/Footer";

const SignUp = () => {
  const [modalShown, toggleModal] = React.useState(false);
  const { cartData, getCartCount } = useGlobalContext();
  return (
    <>
      <HeaderPart
        isPadding={true}
        modalShown={modalShown}
        toggleModal={toggleModal}
        cartData={cartData}
        getCartCount={getCartCount}
      />
      <div className={styles.container}>
        <div className={styles.signupContainer}>
          <div className={styles.signup}>
            <h1 className={styles.signupHeading}>Sign Up</h1>
            <p>If you already have an account register </p>
            <p>
              You can <Link to="/login">Login here!</Link>
            </p>
          </div>

          <div className={styles.formControl}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="">Username</label>
            <input type="email" placeholder="Enter your username" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="">Password</label>
            <input type="email" placeholder="Enter your password" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="">Confirm Password</label>
            <input type="email" placeholder="Confirm your password" />
          </div>
          <Link to="/login">
            {" "}
            <button> Register</button>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <img src={Icon} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
