import React from "react";
import Icon from "../assets/ecommerce.svg";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { HeaderPart } from "../components/Header";
import Footer from "../components/Footer";

function Login() {
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
        <div className={styles.loginContainer}>
          <h3 className={styles.loginGreeting}>Welcome back!!!</h3>
          <h2 className={styles.loginHeading}>Sign In</h2>
          <div className={styles.formControl}>
            <label className={styles.label}>Email</label>
            <input type="text" />
          </div>
          <p className={styles.link}>
            <Link to="/forgotpassword">Forgot Password?</Link>
          </p>
          <div className={styles.formControl}>
            <label className={styles.label}>Password</label>
            <input type="password" />
          </div>
          <Link to="/">
            {" "}
            <button className={styles.button}>SIGN IN</button>{" "}
          </Link>
          <p className={styles.noAccount}>
            <span>I don’t have an account ? </span>
            <p className={styles.link}>
              {" "}
              <Link to="/signup">Sign Up</Link>
            </p>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={Icon} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
