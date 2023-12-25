import React, { useState } from "react";
import styles from "./Checkout.module.css";
import { useGlobalContext } from "../context/context";
import { removeDuplicate } from "../utils/removeDuplicate";
import { HeaderPart } from "../components/Header";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartData } = useGlobalContext();
  const [modalShown, toggleModal] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    emailAddress: false,
    phoneNumber: false,
    address: false,
    zipCode: false,
    city: false,
    country: false,
  });

  const updatedData = removeDuplicate(cartData);

  const totalPrice = updatedData.reduce((acc, curr) => {
    return acc + parseInt(curr.price) * curr.cartCount;
  }, 0);

  const grandTotal = totalPrice + 50;

  const { pathname } = useLocation();

  const { name, emailAddress, phoneNumber, address, zipCode, city, country } =
    formData;

  const handleChange = (event) => {
    console.log(event.target.name, "name");
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleError = (e) => {
    const nameRegrex = /[a-z,0-9,A-Z]{4,}/;
    if (name) {
      if (!nameRegrex.test(name)) {
        setErrors((prev) => ({ ...prev, name: true }));
      } else setErrors((prev) => ({ ...prev, name: false }));
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailAddress) {
      if (!emailRegex.test(emailAddress))
        setErrors((prev) => ({ ...prev, emailAddress: true }));
      else setErrors((prev) => ({ ...prev, emailAddress: true }));
    }

    const mobileRegrex = /^[6-9]{1}[0-9]{9}$/;
    if (phoneNumber) {
      if (!mobileRegrex.test(phoneNumber)) {
        setErrors((prev) => ({ ...prev, phoneNumber: true }));
      } else setErrors((prev) => ({ ...prev, phoneNumber: false }));
    }
    if (address) {
      if (!(address.length > 1)) {
        setErrors((prev) => ({ ...prev, address: true }));
      } else setErrors((prev) => ({ ...prev, address: false }));
    }
    if (zipCode) {
      if (zipCode.length !== 6)
        setErrors((prev) => ({ ...prev, zipCode: true }));
      else setErrors((prev) => ({ ...prev, zipCode: false }));
    }
    if (city) {
      if (!(city.length > 1)) setErrors((prev) => ({ ...prev, city: true }));
      else setErrors((prev) => ({ ...prev, city: false }));
    }
    if (country) {
      if (!(country.length > 1))
        setErrors((prev) => ({ ...prev, country: true }));
      else setErrors((prev) => ({ ...prev, country: false }));
    }
  };
  console.log(errors, "errors");
  console.log(formData, "formData");
  return (
    // formcontainer
    <>
      <HeaderPart
        isPadding={true}
        modalShown={modalShown}
        toggleModal={toggleModal}
        pathname={pathname}
      />
      <div className={styles.formContainer}>
        <p className={styles.back} onClick={() => navigate(-1)}>
          Go Back
        </p>
        {/* formDetails */}
        <div className={styles.formDetails}>
          {/* form */}
          <div className={styles.form}>
            <p>CHECKOUT</p>
            <h1>BILLING DETAILS</h1>
            {/* flex1*/}

            <div className={styles.formControl}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="input"
                onChange={handleChange}
                name="name"
                value={name}
                onBlur={handleError}
                style={{
                  border: errors.name ? "1px solid red" : "1px solid black",
                }}
              />
              {errors.name && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  **Name should be more than 4 characters**
                </p>
              )}
            </div>
            <div className={styles.formControl}>
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="text"
                id="emailAddress"
                onChange={handleChange}
                name="emailAddress"
                value={emailAddress}
                onBlur={handleError}
                style={{
                  border: errors.emailAddress
                    ? "1px solid red"
                    : "1px solid black",
                }}
              />
              {errors.emailAddress && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  **Email Address should be valid**
                </p>
              )}
            </div>

            {/* flex1 */}
            <div className={styles.formControl} style={{ width: "100%" }}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                onChange={handleChange}
                name="phoneNumber"
                value={phoneNumber}
                onBlur={handleError}
                style={{
                  border: errors.phoneNumber
                    ? "1px solid red"
                    : "1px solid black",
                }}
              />
              {errors.phoneNumber && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  **Mobile Number should be valid**
                </p>
              )}
            </div>
            <div className={styles.formControl} style={{ width: "100%" }}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                onChange={handleChange}
                name="address"
                value={address}
                onBlur={handleError}
                style={{
                  border: errors.address ? "1px solid red" : "1px solid black",
                }}
              />
              {errors.address && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  **Address should be greater than 1 character**
                </p>
              )}
            </div>
            {/* flex2 */}
            {/* <div className={styles.flex}> */}
            <div className={styles.formControl}>
              <label htmlFor="zipCode">ZipCode</label>
              <input
                type="text"
                id="zipCode"
                onChange={handleChange}
                name="zipCode"
                value={zipCode}
                onBlur={handleError}
                style={{
                  border: errors.zipCode ? "1px solid red" : "1px solid black",
                }}
              />
              {errors.zipCode && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  **ZipCode should be exactly 6 digits**
                </p>
              )}
            </div>
            <div className={styles.formControl}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                onChange={handleChange}
                name="city"
                value={city}
                onBlur={handleError}
                style={{
                  border: errors.city ? "1px solid red" : "1px solid black",
                }}
              />
              {errors.city && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  **City should be more than one character**
                </p>
              )}
            </div>
            {/* </div> */}
            {/* flex2 */}

            <div className={styles.formControl} style={{ width: "100%" }}>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                onChange={handleChange}
                value={country}
                name="country"
                onBlur={handleError}
                style={{
                  border: errors.country ? "1px solid red" : "1px solid black",
                }}
              />
              {errors.country && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  **Country should be more than one character**
                </p>
              )}
            </div>
          </div>
          {/* form */}

          {/* //summary */}
          <div className={styles.summaryContainer}>
            <h1 className={styles.summary}>Summary</h1>
            <div className={styles.productDetails}>
              {updatedData.map((cdata) => (
                <div className={styles.flexContainer}>
                  <img src={cdata.image} />
                  <div className={styles.priceDetails}>
                    <p className={styles.abr}>{cdata.abr}</p>
                    <p className={styles.price}>$ {cdata.price}</p>
                  </div>
                  <p className={styles.cartCount}>x{cdata.cartCount}</p>
                </div>
              ))}
            </div>
            <div className={styles.detailsContainer}>
              <p className={styles.label}>Total</p>
              <p className={styles.ans}>$ {totalPrice}</p>
            </div>
            <div className={styles.detailsContainer}>
              <p className={styles.label}>SHIPPING</p>
              <p className={styles.ans}>$50</p>
            </div>
            <div className={styles.detailsContainer}>
              <p className={styles.label}>GRAND TOTAL</p>
              <p className={styles.grandTotal}>$ {grandTotal}</p>
            </div>

            <button
              className={styles.btn}
              onClick={() => {
                toggleModal((prevModal) => !prevModal);
              }}
            >
              CONTINUE & PAY
            </button>
          </div>
          {/* summary */}
        </div>
        {/* formDetails */}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
