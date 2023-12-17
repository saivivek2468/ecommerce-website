import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../assets/ecommerce-svg.svg";
import { HeaderPart } from "../components/Header";
import { useGlobalContext } from "../context/context";
import Footer from "../components/Footer";
import axios from "axios";
import { URL } from "../api/api";
import { toast } from "react-toastify";

const SignUp = () => {
  const [modalShown, toggleModal] = React.useState(false);
  const { cartData, getCartCount } = useGlobalContext();
  const [signUpData, setSignUpData] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    first_name: false,
    last_name: false,
    mobile_number: false,
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const { first_name, last_name, mobile_number, email, password } = signUpData;
  const mobileRegrex = /^[6-9]\d{9}$/;
  const emailRegrex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  useEffect(() => {
    if (first_name && last_name && mobile_number && email && password) {
      if (first_name.length >= 3)
        setErrors((prev) => ({ ...prev, first_name: false }));
      else setErrors((prev) => ({ ...prev, first_name: true }));
      if (last_name.length >= 3)
        setErrors((prev) => ({ ...prev, last_name: false }));
      else setErrors((prev) => ({ ...prev, last_name: true }));

      if (mobileRegrex.test(mobile_number))
        setErrors((prev) => ({ ...prev, mobile_number: false }));
      else setErrors((prev) => ({ ...prev, mobile_number: true }));
      if (emailRegrex.test(email))
        setErrors((prev) => ({ ...prev, email: false }));
      else setErrors((prev) => ({ ...prev, email: true }));
      if (password.length >= 8)
        setErrors((prev) => ({ ...prev, password: false }));
      else setErrors((prev) => ({ ...prev, password: true }));
    }
  }, [first_name, last_name, mobile_number, email, password]);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  function isCheckError() {
    return (
      first_name.length >= 3 &&
      last_name.length >= 3 &&
      mobileRegrex.test(mobile_number) &&
      emailRegrex.test(email) &&
      password.length >= 8
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isCheckError()) {
        const data = await axios.post(
          `${URL}signup`,
          {
            first_name,
            last_name,
            email,
            password,
            mobile_number: Number(mobile_number),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (data.data.code === 201) {
          toast("Sign up Successfully");
          navigate("/login");
        }
      } else {
        setErrors({
          first_name: true,
          last_name: true,
          mobile_number: true,
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
        <div className={styles.signupContainer}>
          <div className={styles.signup}>
            <h1 className={styles.signupHeading}>Sign Up</h1>
            <p>If you already have an account register </p>
            <p>
              You can <Link to="/login">Login here!</Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formControl}>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="Enter your First Name"
                name="first_name"
                value={first_name}
                onChange={handleChange}
                style={{
                  borderBottom: errors.first_name
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
                {errors.first_name &&
                  "User name should be greater than equal to 3"}
              </p>
            </div>
            <div className={styles.formControl}>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Enter your Last Name"
                name="last_name"
                value={last_name}
                onChange={handleChange}
                style={{
                  borderBottom: errors.last_name
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
                {errors.last_name &&
                  "Last name should be greater than equal to 3"}
              </p>
            </div>
            <div className={styles.formControl}>
              <label htmlFor="">Mobile Number</label>
              <input
                type="text"
                placeholder="Enter your Mobile Number"
                name="mobile_number"
                value={mobile_number}
                onChange={handleChange}
                style={{
                  borderBottom: errors.mobile_number
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
                {errors.mobile_number &&
                  "Mobile number should be valid 10 digits number"}
              </p>
            </div>

            <div className={styles.formControl}>
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
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
            <div className={styles.formControl}>
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
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
            <button type="submit"> Register</button>
          </form>
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
