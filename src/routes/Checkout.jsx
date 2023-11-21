import React, { useEffect, useState } from "react";
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

  const updatedData = removeDuplicate(cartData);

  const totalPrice = updatedData.reduce((acc, curr) => {
    return acc + parseInt(curr.price) * curr.cartCount;
  }, 0);

  const grandTotal = totalPrice + 50;

  const { pathname } = useLocation();

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
              <input type="text" id="name" className="input" />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="emailaddress">Email Address</label>
              <input type="text" id="emailaddress" />
            </div>

            {/* flex1 */}
            <div className={styles.formControl} style={{ width: "100%" }}>
              <label htmlFor="phonenumber">Phone Number</label>
              <input type="text" id="phonenumber" />
            </div>
            <div className={styles.formControl} style={{ width: "100%" }}>
              <label htmlFor="address">Address</label>
              <input type="text" id="address" />
            </div>
            {/* flex2 */}
            {/* <div className={styles.flex}> */}
            <div className={styles.formControl}>
              <label htmlFor="zipcode">ZipCode</label>
              <input type="text" id="zipcode" />
            </div>
            <div className={styles.formControl}>  
              <label htmlFor="city">City</label>
              <input type="text" id="city" />
            </div>
            {/* </div> */}
            {/* flex2 */}

            <div className={styles.formControl} style={{ width: "100%" }}>
              <label htmlFor="country">Country</label>
              <input type="text" id="country" />
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
