import React, { useEffect, useState } from "react";
import Icon from "../assets/ecommerce-svg.svg";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { HeaderPart } from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { URL } from "../api/api";
import axios from "axios";

function Login() {
  const [modalShown, toggleModal] = React.useState(false);
  const { cartData, getCartCount } = useGlobalContext();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const { email, password } = loginData;
  const emailRegrex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  useEffect(() => {
    if (email && password) {
      if (emailRegrex.test(email))
        setErrors((prev) => ({ ...prev, email: false }));
      else setErrors((prev) => ({ ...prev, email: true }));
      if (password.length >= 8)
        setErrors((prev) => ({ ...prev, password: false }));
      else setErrors((prev) => ({ ...prev, password: true }));
    }
  }, [email, password]);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  function isCheckError() {
    return emailRegrex.test(email) && password.length >= 8;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isCheckError()) {
        const data = await axios.post(
          `${URL}login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data, "data in login");
        if (data.data.code === 201) {
          toast("login Successfully");
          localStorage.setItem("token", JSON.stringify(data.data.data.token));
          navigate("/");
        }
      } else {
        setErrors({
          email: true,
          password: true,
        });
      }
    } catch (error) {
      toast(error.message);
    }
  };
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
          <form onSubmit={handleSubmit}>
            <div className={styles.formControl}>
              <label className={styles.label}>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                style={{
                  borderBottom: errors.email
                    ? "1px solid red"
                    : "1px solid #000",
                }}
              />
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "14px",
                  marginBottom: "8px",
                }}
              >
                {errors.email && "Email should be valid "}
              </p>
            </div>
            <p className={styles.link}>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </p>
            <div className={styles.formControl}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                style={{
                  borderBottom: errors.password
                    ? "1px solid red"
                    : "1px solid #000",
                }}
              />
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "14px",
                  marginBottom: "8px",
                }}
              >
                {errors.password &&
                  "Password  length should be greater than equal to 8 "}
              </p>
            </div>
            <button className={styles.button} type="submit">
              SIGN IN
            </button>{" "}
          </form>
          <p className={styles.noAccount}>
            <span>I don’t have an account ? </span>
          </p>
          <p className={styles.link}>
            {" "}
            <Link to="/signup">Sign Up</Link>
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
