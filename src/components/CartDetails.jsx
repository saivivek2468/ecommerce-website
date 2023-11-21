import React, { useEffect, useState } from "react";
import styles from "./CartDetails.module.css";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import { removeDuplicate } from "../utils/removeDuplicate";

const CartDetails = () => {
  const { cartData, setCartData } = useGlobalContext();
  const [noRepeatedData, setNoRepeatedData] = useState([]);

  useEffect(() => {
    const removeDuplicateCartData = removeDuplicate(cartData);
    setNoRepeatedData(removeDuplicateCartData);
  }, []);

  const totalPrice = noRepeatedData.reduce((acc, curr) => {
    return acc + parseInt(curr.price) * curr.cartCount;
  }, 0);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartLength}>
        <h2>CART{`(${noRepeatedData.length})`}</h2>
        <p
          onClick={() => {
            setNoRepeatedData([]);
            setCartData([]);
          }}
        >
          Remove All
        </p>
      </div>
      <div className={styles.column}>
        {noRepeatedData.map((norepData) => (
          <div className={styles.cartDetails} key={norepData.id}>
            <img src={norepData.image} alt="image" />
            <div className={styles.priceDetails}>
              <p className={styles.heading}>{norepData.abr}</p>
              <p className={styles.price}>{norepData.price}</p>
            </div>
            <button className={styles.btn}>
              {/* <span className={styles.plus}>+</span> */}
              {norepData.cartCount}
              {/* <span className={styles.minus}>-</span> */}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.totalDetails}>
        <p className={styles.total}>Total</p>
        <p className={styles.price}>${totalPrice}</p>
      </div>
      <Link to="/checkout">
        <button
          className={styles.btnCheckout}
          disabled={noRepeatedData.length === 0}
        >
          CHECKOUT
        </button>
      </Link>
    </div>
  );
};

export default CartDetails;
