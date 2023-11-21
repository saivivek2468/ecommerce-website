import React from "react";
import styles from "./ConfirmDetails.module.css";
import ConfirmationIcon from "../assets/checkout/icon-order-confirmation.svg";
import { removeDuplicate } from "../utils/removeDuplicate";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const ConfirmDetails = () => {
  const { cartData } = useGlobalContext();
  const removeDuplicateCartData = removeDuplicate(cartData);
  const totalPrice = removeDuplicateCartData.reduce((acc, curr) => {
    return acc + parseInt(curr.price) * curr.cartCount;
  }, 0);
  return (
    <div>
      <img src={ConfirmationIcon} className={styles.confirmIcon} />
      <h1 className={styles.thankText}>THANK YOU FOR YOUR ORDER</h1>
      <p className={styles.description}>
        You will receive an email confirmation shortly.
      </p>
      <div className={styles.container}>
        <div className={styles.both}>
          <div className={styles.rowFlexContainer}>
            <img src={removeDuplicateCartData?.[0]?.image} />
            <div className={styles.columnFlexContainer}>
              <p className={styles.heading}>
                {removeDuplicateCartData?.[0]?.abr}
              </p>
              <p className={styles.price}>
                ${removeDuplicateCartData?.[0]?.price}
              </p>
            </div>
            <p className={styles.cartCount}>
              x{removeDuplicateCartData?.[0]?.cartCount}
            </p>
          </div>
          <hr />
          <p className={styles.remaining}>
            {" "}
            and {removeDuplicateCartData.length - 1} other item(s)
          </p>
        </div>
        <div className={styles.totalPrice}>
          <p className={styles.grandTotal}>GRAND TOTAL</p>
          <p className={styles.price}>${totalPrice + 50}</p>
        </div>
      </div>
      <button className={styles.btn} c>
        <Link to="/"> BACK TO HOME</Link>
      </button>
    </div>
  );
};

export default ConfirmDetails;
